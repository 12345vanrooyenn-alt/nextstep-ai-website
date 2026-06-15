/* Nextstep AI — Shared UI */
'use strict';

/* ─── NAV SCROLL BACKGROUND ─── */
(function() {
  var nav = document.getElementById('nav');
  if (!nav) return;
  window.addEventListener('scroll', function() {
    nav.classList.toggle('nav-scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* ─── HAMBURGER MOBILE MENU ─── */
(function() {
  var toggle = document.getElementById('navToggle');
  var mobile = document.getElementById('navMobile');
  if (!toggle || !mobile) {
    if (window.console) console.warn('[nav] menu toggle skipped — #navToggle or #navMobile missing');
    return;
  }

  function isOpen() {
    return mobile.classList.contains('open');
  }

  function openMenu() {
    mobile.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    mobile.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen()) closeMenu(); else openMenu();
  });

  /* Close mobile nav on any link tap */
  mobile.addEventListener('click', function(e) {
    if (e.target.closest('a')) closeMenu();
  });

  /* Close on Escape */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen()) closeMenu();
  });

  /* Close on tap/click outside the nav while open */
  document.addEventListener('click', function(e) {
    if (!isOpen()) return;
    if (e.target.closest('#nav')) return;
    closeMenu();
  });

  /* Force-close when resizing up to desktop so state never gets stuck */
  var DESKTOP_BP = 768;
  window.addEventListener('resize', function() {
    if (window.innerWidth > DESKTOP_BP && isOpen()) closeMenu();
  }, { passive: true });

  /* Reset menu state on bfcache restore (back/forward navigation) */
  window.addEventListener('pageshow', function() {
    if (isOpen()) closeMenu();
  });
})();

/* ─── SERVICE WORKER REGISTRATION ─── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').catch(function() {});
  });
}

/* ─── SERVICE CARD VIDEO HOVER PLAY ─── */
document.querySelectorAll('.service-video-thumb').forEach(function(thumb) {
  var video = thumb.querySelector('video');
  if (!video) return;

  thumb.closest('.service-card').addEventListener('mouseenter', function() {
    video.play().catch(function() {});
  });

  thumb.closest('.service-card').addEventListener('mouseleave', function() {
    video.pause();
    video.currentTime = 0;
  });
});

/* ─── WORKFLOW VIDEO FALLBACK ─── */
(function() {
  var wfVideo = document.querySelector('.workflow-video');
  if (!wfVideo) return;

  wfVideo.addEventListener('playing', function() {
    wfVideo.classList.add('is-playing');
  });

  /* Lazy-load workflow video when section scrolls into view */
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          wfVideo.preload = 'auto';
          wfVideo.load();
          obs.disconnect();
        }
      });
    }, { rootMargin: '200px' });
    obs.observe(wfVideo);
  }
})();
