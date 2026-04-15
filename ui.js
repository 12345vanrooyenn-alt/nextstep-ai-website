/* Nextstep AI — Shared UI */
'use strict';

/* ─── THREE-DOT MENU ─── */
(function() {
  var dotsBtn = document.getElementById('navDotsBtn');
  var dotsDropdown = document.getElementById('navDotsDropdown');
  if (!dotsBtn || !dotsDropdown) return;

  dotsBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    var isOpen = dotsDropdown.classList.toggle('open');
    dotsBtn.setAttribute('aria-expanded', isOpen);
  });
  document.addEventListener('click', function() {
    dotsDropdown.classList.remove('open');
    dotsBtn.setAttribute('aria-expanded', 'false');
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      dotsDropdown.classList.remove('open');
      dotsBtn.setAttribute('aria-expanded', 'false');
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
