/* Nextstep AI — Premium Animations */

/* ─── 1. PAGE LOAD FADE-IN ─────────────────────── */
document.documentElement.style.opacity = '0';
document.documentElement.style.transition = 'opacity 0.45s ease';
window.addEventListener('load', () => {
  document.documentElement.style.opacity = '1';
});

/* ─── 2. NUMBER COUNTER ANIMATION ──────────────── */
function parseNum(str) {
  const clean = str.replace(/[^0-9.]/g, '');
  return parseFloat(clean) || 0;
}
function formatNum(val, original) {
  const prefix = original.match(/^[^0-9]*/)?.[0] || '';
  const suffix = original.match(/[^0-9.]+$/)?.[0] || '';
  const hasDecimal = original.includes('.');
  const formatted = hasDecimal ? val.toFixed(1) : Math.round(val).toLocaleString();
  return prefix + formatted + suffix;
}

function animateCounter(el) {
  const original = el.textContent.trim();
  const target = parseNum(original);
  if (!target) return;
  const duration = 1600;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = formatNum(eased * target, original);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = original;
  }
  requestAnimationFrame(step);
}

const counterSelectors = [
  '.interstitial-stat-number',
  '.stat-num',
  '.about-cred-num',
  '.num-value',
  '.result-number',
  '.numbers-grid .num-val',
];

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(counterSelectors.join(',')).forEach(el => {
  counterObserver.observe(el);
});

/* ─── 3. STAGGERED CARD ENTRANCE ───────────────── */
const staggerGroups = [
  '.steps-grid .step-card',
  '.services-grid .service-card',
  '.why-grid .why-card',
  '.rules-grid .rules-card',
  '.urgency-grid .urgency-card',
  '.interstitial-stats .interstitial-stat',
  '.pricing-cards .pricing-card',
  '.integrations-grid .int-item',
  '.numbers-grid .num-item',
  '.team-gallery .tg-img',
];

staggerGroups.forEach(selector => {
  const items = document.querySelectorAll(selector);
  items.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(24px)';
    item.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
  });

  const groupObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        groupObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(item => groupObserver.observe(item));
});

/* ─── 4. GRADIENT SHIMMER ON HEADLINE TEXT ─────── */
const shimmerCSS = `
  @keyframes gradient-shift {
    0%   { background-position: 0% center; }
    50%  { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
  .headline-gradient {
    background-size: 200% auto !important;
    animation: gradient-shift 4s ease infinite;
  }
`;
const shimmerStyle = document.createElement('style');
shimmerStyle.textContent = shimmerCSS;
document.head.appendChild(shimmerStyle);

/* ─── 5. BUTTON MAGNETIC HOVER EFFECT ──────────── */
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

/* ─── 6. CARD 3D TILT ON HOVER ─────────────────── */
const tiltSelectors = '.step-card, .service-card, .stat-card, .pricing-card';
document.querySelectorAll(tiltSelectors).forEach(card => {
  card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale(1.02)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ─── 7. SMOOTH TYPING BADGE (hero only) ───────── */
const badge = document.querySelector('.hero-badge');
if (badge) {
  const text = badge.textContent.trim();
  badge.textContent = '';
  badge.style.minHeight = '1.2em';
  let i = 0;
  // Keep the dot span if it exists
  const dot = document.createElement('span');
  dot.className = 'badge-dot';
  badge.appendChild(dot);
  const textNode = document.createElement('span');
  badge.appendChild(textNode);
  setTimeout(() => {
    const interval = setInterval(() => {
      textNode.textContent = text.slice(0, i++);
      if (i > text.length) clearInterval(interval);
    }, 28);
  }, 600);
}

/* ─── 8. ACTIVE NAV LINK HIGHLIGHT ON SCROLL ───── */
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
if (navLinks.length) {
  const sections = [...navLinks].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = '#' + s.id;
    });
    navLinks.forEach(a => {
      a.style.color = a.getAttribute('href') === current ? 'var(--sky)' : '';
    });
  }, { passive: true });
}
