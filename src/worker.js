// Nextstep AI — Cloudflare Worker
// Routes /api/* to handlers below; everything else is served from the static
// asset binding (the project root). Add new endpoints to the dispatch table.

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/qualify-submit' && request.method === 'POST') {
      return handleQualifySubmit(request, env, ctx);
    }

    if (url.pathname === '/api/contact-submit' && request.method === 'POST') {
      return handleContactSubmit(request, env, ctx);
    }

    const assetResponse = await env.ASSETS.fetch(request);
    return withSiteHeaders(assetResponse, url.pathname);
  }
};

const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

function cacheControlFor(pathname) {
  if (pathname === '/sw.js' || pathname.endsWith('/sw.js')) {
    return 'no-cache, must-revalidate';
  }
  if (pathname === '/' || pathname.endsWith('.html')) {
    return 'public, max-age=300, must-revalidate';
  }
  if (/\.(?:css|js|svg|webp|avif|jpg|jpeg|png|gif|ico|mp4|webm|woff2?|ttf|otf)$/i.test(pathname)) {
    return 'public, max-age=86400, stale-while-revalidate=604800';
  }
  return null;
}

function withSiteHeaders(response, pathname) {
  // Mutable clone — original headers may be immutable
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(SECURITY_HEADERS)) {
    headers.set(k, v);
  }
  const cc = cacheControlFor(pathname);
  if (cc) headers.set('Cache-Control', cc);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers
  });
}

async function handleQualifySubmit(request, env, ctx) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  if (!payload?.email || !payload?.brandName) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }

  // Log every submission so it's recoverable from `wrangler tail` even if
  // both delivery channels fail.
  console.log('QUALIFY_SUBMISSION', JSON.stringify(payload));

  // Run delivery in the background so the response returns immediately.
  ctx.waitUntil(deliver(env, payload));

  return json({ ok: true });
}

async function deliver(env, payload) {
  const results = await Promise.allSettled([
    sendTelegram(env, payload),
    sendEmail(env, payload)
  ]);

  const summary = results.map((r, i) => {
    const name = i === 0 ? 'telegram' : 'email';
    if (r.status === 'fulfilled') return `${name}:${r.value ? 'ok' : 'skipped'}`;
    return `${name}:err(${r.reason?.message || 'unknown'})`;
  });
  console.log('QUALIFY_DELIVERY', summary.join(' '));
}

async function handleContactSubmit(request, env, ctx) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  if (!payload?.email || !payload?.message) {
    return json({ ok: false, error: 'missing_fields' }, 400);
  }

  console.log('CONTACT_SUBMISSION', JSON.stringify(payload));

  ctx.waitUntil(deliverContact(env, payload));

  return json({ ok: true });
}

async function deliverContact(env, payload) {
  const results = await Promise.allSettled([
    sendContactTelegram(env, payload),
    sendContactEmail(env, payload)
  ]);
  const summary = results.map((r, i) => {
    const name = i === 0 ? 'telegram' : 'email';
    if (r.status === 'fulfilled') return `${name}:${r.value ? 'ok' : 'skipped'}`;
    return `${name}:err(${r.reason?.message || 'unknown'})`;
  });
  console.log('CONTACT_DELIVERY', summary.join(' '));
}

async function sendContactTelegram(env, p) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return false;

  const text = [
    `💬 <b>New Contact Message</b>`,
    ``,
    `<b>${esc(p.name || 'Anonymous')}</b> — ${esc(p.email)}`,
    p.brand ? `Brand: ${esc(p.brand)}` : null,
    ``,
    esc(p.message),
    ``,
    `<i>Submitted: ${esc(p.submittedAt)}</i>`
  ].filter((l) => l !== null).join('\n');

  const res = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    }
  );

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`telegram ${res.status}: ${body.slice(0, 200)}`);
  }
  return true;
}

async function sendContactEmail(env, p) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL) return false;

  const fromAddress = env.RESEND_FROM || 'Nextstep AI <onboarding@resend.dev>';
  const messageHtml = esc(p.message).replace(/\n/g, '<br>');

  const html = `<!doctype html>
<html><body style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#f1f5f9;padding:32px 16px;">
  <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:32px;">
    <div style="display:inline-block;padding:4px 10px;background:#e0f2fe;color:#0369a1;font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;border-radius:999px;margin-bottom:12px;">New Contact Message</div>
    <h1 style="font-size:22px;color:#0f172a;margin:0 0 4px;font-weight:700;">${esc(p.name || 'Anonymous')}</h1>
    <p style="font-size:13px;color:#64748b;margin:0 0 24px;">${esc(p.email)}${p.brand ? ' · ' + esc(p.brand) : ''} · ${esc(p.submittedAt)}</p>
    <div style="font-size:14px;color:#0f172a;line-height:1.6;white-space:pre-wrap;">${messageHtml}</div>
    <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">Reply directly to this email to reach ${esc(p.name || 'them')}.</p>
  </div>
</body></html>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromAddress,
      to: env.NOTIFY_EMAIL,
      reply_to: p.email,
      subject: `Contact: ${p.name || p.email}`,
      html
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`resend ${res.status}: ${body.slice(0, 200)}`);
  }
  return true;
}

async function sendTelegram(env, p) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return false;

  const res = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: formatTelegram(p),
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    }
  );

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`telegram ${res.status}: ${body.slice(0, 200)}`);
  }
  return true;
}

async function sendEmail(env, p) {
  if (!env.RESEND_API_KEY || !env.NOTIFY_EMAIL) return false;

  const fromAddress = env.RESEND_FROM || 'Nextstep AI <onboarding@resend.dev>';

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: fromAddress,
      to: env.NOTIFY_EMAIL,
      reply_to: p.email,
      subject: `New brand submission: ${p.brandName}`,
      html: formatEmail(p)
    })
  });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`resend ${res.status}: ${body.slice(0, 200)}`);
  }
  return true;
}

const esc = (s) =>
  String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

function formatTelegram(p) {
  const lines = [
    `🎯 <b>New Brand Submission</b>`,
    ``,
    `<b>${esc(p.brandName)}</b>`,
    `${esc(p.firstName)} ${esc(p.lastName)} — ${esc(p.email)}`,
    p.phone ? esc(p.phone) : null,
    ``,
    p.niche ? `Niche: ${esc(p.niche)}` : null,
    p.revenue ? `Revenue: ${esc(p.revenue)}` : null,
    p.aov ? `AOV: ${esc(p.aov)}` : null,
    p.plan ? `Plan: ${esc(p.plan)}` : null,
    ``,
    p.tools ? `Tools: ${esc(p.tools)}` : null,
    p.challenges ? `Challenges: ${esc(p.challenges)}` : null,
    ``,
    p.website ? `🌐 ${esc(p.website)}` : null,
    p.instagram ? `📷 ${esc(p.instagram)}` : null,
    p.notes ? `\nNotes: ${esc(p.notes)}` : null,
    ``,
    `<i>Submitted: ${esc(p.submittedAt)}</i>`
  ];
  return lines.filter((l) => l !== null).join('\n');
}

function formatEmail(p) {
  const row = (label, val) =>
    val
      ? `<tr><td style="padding:10px 16px 10px 0;color:#64748b;font-size:13px;vertical-align:top;width:120px;">${label}</td><td style="padding:10px 0;color:#0f172a;font-size:14px;">${esc(val)}</td></tr>`
      : '';

  return `<!doctype html>
<html><body style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#f1f5f9;padding:32px 16px;">
  <div style="max-width:620px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:14px;padding:32px;">
    <div style="display:inline-block;padding:4px 10px;background:#e0f2fe;color:#0369a1;font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;border-radius:999px;margin-bottom:12px;">New Brand Submission</div>
    <h1 style="font-size:24px;color:#0f172a;margin:0 0 4px;font-weight:700;">${esc(p.brandName)}</h1>
    <p style="font-size:13px;color:#64748b;margin:0 0 24px;">${esc(p.firstName)} ${esc(p.lastName)} · ${esc(p.submittedAt)}</p>
    <table style="width:100%;border-collapse:collapse;">
      ${row('Email', p.email)}
      ${row('Phone', p.phone)}
      ${row('Website', p.website)}
      ${row('Instagram', p.instagram)}
      ${row('Niche', p.niche)}
      ${row('Revenue', p.revenue)}
      ${row('AOV', p.aov)}
      ${row('Plan', p.plan)}
      ${row('Tools', p.tools)}
      ${row('Challenges', p.challenges)}
      ${row('Notes', p.notes)}
    </table>
    <p style="margin:24px 0 0;font-size:12px;color:#94a3b8;">Reply directly to this email to reach ${esc(p.firstName)}.</p>
  </div>
</body></html>`;
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}
