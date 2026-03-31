/* ═══════════════════════════════════════════════
   PAGE TRANSITIONS — Nextstep AI
   Smooth fade between pages
═══════════════════════════════════════════════ */
(function() {
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.id = 'pageTransitionOverlay';
  overlay.style.cssText = [
    'position:fixed',
    'inset:0',
    'background:#060c1a',
    'z-index:999999',
    'pointer-events:none',
    'opacity:1',
    'transition:opacity 0.38s cubic-bezier(0.4,0,0.2,1)'
  ].join(';');
  document.documentElement.appendChild(overlay);

  // Fade in (page load)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.style.opacity = '0';
    });
  });

  // Intercept same-origin link clicks
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    // Skip: external, anchors, new tab, mailto, tel
    if (link.target === '_blank') return;
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
    if (href.startsWith('http') && !href.includes(location.hostname)) return;
    // Skip qualify.html opens in new tab typically but catch internal pages
    const internalPages = ['index.html', 'about.html', 'pricing.html', 'case-study.html', 'qualify.html', 'thank-you.html', 'workflows.html', 'legal.html'];
    const isInternal = internalPages.some(p => href.includes(p)) || href === '/' || href === './';
    if (!isInternal) return;

    e.preventDefault();
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    setTimeout(() => { window.location.href = href; }, 380);
  });
})();
