/* Nextstep AI — Shared UI v1 */
'use strict';

/* ═══════════════════════════════════════════════
   A. BACK TO TOP BUTTON
═══════════════════════════════════════════════ */
(function() {
  const btn = document.createElement('button');
  btn.id = 'backToTop';
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12V4M4 7l4-4 4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ═══════════════════════════════════════════════
   B. TOAST NOTIFICATION SYSTEM
═══════════════════════════════════════════════ */
(function() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.className = 'toast-container';
  document.body.appendChild(container);

  window.NXS = window.NXS || {};
  window.NXS.toast = function(msg, type, duration) {
    type = type || 'info';
    duration = duration || 3500;
    const toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.textContent = msg;
    container.appendChild(toast);
    requestAnimationFrame(function() {
      requestAnimationFrame(function() { toast.classList.add('show'); });
    });
    setTimeout(function() {
      toast.classList.remove('show');
      setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 400);
    }, duration);
  };
})();

/* ═══════════════════════════════════════════════
   C. MAGNETIC BUTTON EFFECT
═══════════════════════════════════════════════ */
(function() {
  if (window.innerWidth <= 768) return;
  var buttons = document.querySelectorAll('.btn-primary, .btn-ghost');
  buttons.forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translate(' + (x * 0.18) + 'px, ' + (y * 0.18) + 'px)';
    });
    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
    });
  });
})();

/* ═══════════════════════════════════════════════
   D. EXIT INTENT POPUP (index.html only)
═══════════════════════════════════════════════ */
(function() {
  var path = window.location.pathname;
  var isIndex = path === '/' || path.endsWith('index.html') || path.endsWith('/');
  if (!isIndex) return;
  if (sessionStorage.getItem('nxs_exit_shown')) return;

  var overlay = document.getElementById('exitIntentOverlay');
  if (!overlay) return;
  var closeBtn = document.getElementById('exitClose');

  function show() {
    if (sessionStorage.getItem('nxs_exit_shown')) return;
    sessionStorage.setItem('nxs_exit_shown', '1');
    overlay.classList.add('active');
  }

  function hide() {
    overlay.classList.remove('active');
  }

  // Trigger when mouse moves to top of viewport
  document.addEventListener('mouseleave', function(e) {
    if (e.clientY < 10) show();
  });

  // Close button
  if (closeBtn) closeBtn.addEventListener('click', hide);

  // Click overlay background to close
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) hide();
  });

  // Also close on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') hide();
  });
})();

/* ═══════════════════════════════════════════════
   E. SERVICE WORKER REGISTRATION
═══════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').catch(function() {
      // SW registration failed — non-critical
    });
  });
}
