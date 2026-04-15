/* Nextstep AI — Service Worker v1 */
'use strict';

var CACHE_NAME = 'nextstep-ai-v9';
var ASSETS = [
  '/index.html',
  '/styles.css',
  '/animations.js',
  '/transitions.js',
  '/ui.js',
  '/hero-scroll.css',
  '/hero-scroll.js',
  '/favicon.svg',
  '/manifest.json'
];

// Install — cache core assets
self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).catch(function() {
      // Cache failed — non-critical
    })
  );
});

// Activate — clean up old caches
self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Fetch — only intercept same-origin GET requests; let everything else pass through
self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;

  var url;
  try { url = new URL(e.request.url); } catch(err) { return; }

  // Do NOT intercept cross-origin requests (fonts, GTM, Calendly, YouTube, etc.)
  if (url.origin !== self.location.origin) return;

  // Network-first: always try fresh content, fall back to cache offline
  e.respondWith(
    fetch(e.request).then(function(response) {
      // Cache successful same-origin HTML/CSS/JS for offline use
      if (response && response.status === 200) {
        var ct = response.headers.get('content-type') || '';
        if (ct.includes('text/html') || ct.includes('text/css') || ct.includes('javascript')) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone);
          }).catch(function() {});
        }
      }
      return response;
    }).catch(function() {
      // Network failed — serve from cache
      return caches.match(e.request).then(function(cached) {
        if (cached) return cached;
        // Fallback to cached index.html for HTML navigations
        var accept = e.request.headers.get('accept') || '';
        if (accept.includes('text/html')) {
          return caches.match('/index.html').then(function(r) {
            return r || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
          });
        }
        return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
      });
    })
  );
});
