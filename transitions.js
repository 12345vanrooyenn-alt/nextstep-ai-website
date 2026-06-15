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

  function resetOverlay() {
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
  }

  // Always reset on show/hide so the overlay can never be left covering the
  // page (bfcache restore, or a navigation that was cancelled by the browser).
  window.addEventListener('pageshow', resetOverlay);
  window.addEventListener('pagehide', resetOverlay);

  // Intercept same-origin link clicks
  document.addEventListener('click', function(e) {
    // Never interfere while the mobile menu is open — let ui.js handle the tap
    // (close the menu / navigate). Prevents the overlay from swallowing menu taps.
    if (document.body.classList.contains('menu-open')) return;

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
    // Safety net: if navigation is blocked/cancelled, never leave the page covered.
    setTimeout(resetOverlay, 3000);
  });
})();
