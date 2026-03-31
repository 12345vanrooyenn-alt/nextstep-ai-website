/* Nextstep AI — Service Worker v1 */
'use strict';

var CACHE_NAME = 'nextstep-ai-v1';
var ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/animations.js',
  '/transitions.js',
  '/ui.js',
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
      // Cache failed — non-critical, page still loads from network
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

// Fetch — cache first, fall back to network
self.addEventListener('fetch', function(e) {
  // Only handle GET requests for same-origin resources
  if (e.request.method !== 'GET') return;
  var url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      if (cached) return cached;
      return fetch(e.request).then(function(response) {
        // Cache successful HTML/CSS/JS responses
        if (response && response.status === 200) {
          var ct = response.headers.get('content-type') || '';
          if (ct.includes('text/html') || ct.includes('text/css') || ct.includes('javascript')) {
            var clone = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(e.request, clone);
            });
          }
        }
        return response;
      });
    }).catch(function() {
      // Offline fallback for HTML pages
      if (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html')) {
        return caches.match('/index.html');
      }
    })
  );
});
