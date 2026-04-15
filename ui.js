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
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', function(e) {
    e.stopPropagation();
    mobile.classList.toggle('open');
    toggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  /* Close mobile nav on any link tap */
  mobile.querySelectorAll('a').forEach(function(a) {
    a.addEventListener('click', function() {
      mobile.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  /* Close menu when tapping outside */
  document.addEventListener('click', function(e) {
    if (mobile.classList.contains('open') && !mobile.contains(e.target) && !toggle.contains(e.target)) {
      mobile.classList.remove('open');
      toggle.classList.remove('active');
      document.body.classList.remove('menu-open');
    }
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
