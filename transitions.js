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

  // Fix bfcache: browser back button restores page with overlay stuck at opacity:1
  window.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
    }
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

    // Check if same-origin HTML page
    try {
      const url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
    } catch (err) { return; }

    e.preventDefault();
    overlay.style.opacity = '1';
    overlay.style.pointerEvents = 'all';
    setTimeout(() => { window.location.href = href; }, 380);
  });
})();
