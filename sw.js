const CACHE_NAME = 'dianhaozi-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js',
  'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Serif+SC:wght@400;500;600;700&display=swap'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('电耗子: 缓存资源...');
        return cache.addAll(ASSETS_TO_CACHE).catch(err => {
          console.log('部分资源缓存失败:', err);
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip API requests (Gist, Open-Meteo) - always fetch from network
  const url = new URL(event.request.url);
  if (url.hostname.includes('github.com') || url.hostname.includes('open-meteo.com') || url.hostname.includes('githubusercontent.com')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => new Response(JSON.stringify({ error: '网络不可用' }), {
          headers: { 'Content-Type': 'application/json' }
        }))
    );
    return;
  }

  // Cache-first for static assets
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          // Return cached, but also update cache in background
          fetch(event.request)
            .then(response => {
              if (response.ok) {
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, response));
              }
            })
            .catch(() => {});
          return cached;
        }

        // Not cached - fetch from network
        return fetch(event.request)
          .then(response => {
            // Cache successful responses
            if (response.ok && event.request.url.startsWith('http')) {
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
            }
            return response;
          })
          .catch(() => {
            // Offline fallback for HTML pages
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match('/index.html');
            }
            return new Response('离线状态', { status: 503 });
          });
      })
  );
});

// Background sync for data saving
self.addEventListener('sync', event => {
  if (event.tag === 'sync-bills') {
    console.log('电耗子: 后台同步账单数据');
  }
});

// Push notifications (optional)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: '电耗子提醒', body: '有新的账单数据' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><rect width="96" height="96" rx="24" fill="%23d97757"/><text x="48" y="70" font-size="50" text-anchor="middle" fill="white">🐹</text></svg>',
      badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="%23d97757"/></svg>',
      vibrate: [200, 100, 200]
    })
  );
});