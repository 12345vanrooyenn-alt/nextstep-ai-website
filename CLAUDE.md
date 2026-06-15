# Nextstep AI — Website Project Rules

## Design
- Always check /brand-assets/brand-guidelines.md before every design decision
- **Banned fonts:** Inter, Roboto, Arial, Space Grotesk — use Syne (headings) + Outfit (body)
- Prefer glassmorphism and premium dark-accent aesthetics over flat/generic UI
- Default color mode: white + navy + sky blue (per brand — see brand guidelines)
- Glassmorphism: use `backdrop-filter: blur()` on dark sections, cards, and overlays
- Never use box-shadow without also using a border for definition
- Spacing: generous whitespace — minimum 96px between sections on desktop

## Screenshot Loop (before any review)
- After generating or updating any UI, analyze the visual mentally
- Check: typography hierarchy, contrast ratios, hover states, mobile layout
- Fix all obvious issues before showing the user
- Repeat until the design looks intentional and polished

## Development
- Use semantic HTML5 + CSS only (no frameworks unless explicitly asked)
- All colors, fonts, and spacing values stored as CSS custom properties (`:root`)
- Keep `index.html` for structure only — all styles live in `styles.css`
- Split large sections into separate CSS blocks with clear comments
- No hardcoded inline styles — everything goes through classes

## Brand
- Company: Nextstep AI
- CEO: Caleb van Rooyen
- Niche: AI workflow automation for e-commerce clothing brands
- Tone: Confident, direct, premium — never salesy, never generic
- Logo: Dark navy background (#0f172a) + sky-blue gradient N mark with circuit node

## Links (keep updated)
- Qualify form: https://nextstepai.com/qualify.html (native Netlify Form, name="qualify", AJAX POST to "/" → redirects to thank-you.html)
- Contact form: https://nextstepai.com/contact.html (native Netlify Form)
- Instagram: https://instagram.com/caleb_automates
- Book a Call: https://calendly.com/12345vanrooyenn/30min
- WhatsApp: +27 63 303 8209 (wa.me/27633038209) — used in whatsapp.js + contact.html
- Domain: nextstepai.com (NOT yet owned — parked on Spaceship; live site is the free Netlify URL below)

## Form submission delivery (Netlify Forms — Cloudflare Worker dropped)
- Forms use native Netlify Forms: data-netlify="true" + hidden form-name + bot-field honeypot.
- Submissions appear in Netlify dashboard → Forms. src/worker.js + wrangler.jsonc are retained on disk but UNUSED.
- IMPORTANT: set up form notifications in Netlify (Site config → Forms → Form notifications → email/Slack) so Caleb actually receives leads — otherwise they sit silently in the dashboard.

## Deployment (Netlify + GitHub auto-deploy — Wrangler dropped)
- Platform: Netlify, continuous deploy from GitHub repo (12345vanrooyenn-alt/nextstep-ai-website, branch main).
- Deploy = `git push` to main. Netlify auto-builds and publishes (~30–60s). No CLI deploy needed.
- Netlify project: nextstepai-agency · Admin: https://app.netlify.com/projects/nextstepai-agency
- Live (free) URL: https://nextstepai-agency.netlify.app
- Config: netlify.toml (publish ".", 301 redirects, security headers, cache rules).

## Image Generation
- Nano Banana 2 setup: see `nano-banana-setup.md` in this workspace
- Generation script: `nano-banana/scripts/generate_gemini.py`
- Brand colors for prompts: deep navy (#0f172a), sky blue (#0ea5e9), light blue (#38bdf8)

## Heading Standard
- All headings: Syne weight 700 + letter-spacing -0.015em
