// Enhanced Service Worker for ECHO Music Platform
const VERSION = '2.0.0';
const CACHE_NAME = `echo-v${VERSION}`;
const STATIC_CACHE = `echo-static-v${VERSION}`;
const DYNAMIC_CACHE = `echo-dynamic-v${VERSION}`;
const IMAGE_CACHE = `echo-images-v${VERSION}`;

const STATIC_FILES = [
  '/',
  '/manifest.json',
  '/favicon.svg',
  '/icon-192x192.svg',
  '/icon-512x512.svg'
];

const CACHE_STRATEGIES = {
  CACHE_FIRST: 'cache-first',
  NETWORK_FIRST: 'network-first',
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate'
};

// Clear old caches
async function clearOldCaches() {
  const cacheNames = await caches.keys();
  const oldCaches = cacheNames.filter(name => 
    name.startsWith('echo-') && !name.includes(VERSION)
  );
  
  return Promise.all(oldCaches.map(name => {
    console.log(`[SW] Deleting old cache: ${name}`);
    return caches.delete(name);
  }));
}

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log(`[SW] Installing service worker v${VERSION}...`);
  
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE)
        .then((cache) => {
          console.log('[SW] Caching static files');
          return cache.addAll(STATIC_FILES);
        }),
      // Clear old caches
      clearOldCaches()
    ])
    .then(() => {
      console.log('[SW] Service worker installed successfully');
      return self.skipWaiting();
    })
    .catch((error) => {
      console.error('[SW] Failed to install service worker:', error);
    })
  );
});

// Activate event - clean old caches and claim clients
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  
  event.waitUntil(
    Promise.all([
      clearOldCaches(),
      self.clients.claim()
    ])
    .then(() => {
      console.log('[SW] Service worker activated');
    })
  );
});

// Cache strategy functions
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[SW] Network request failed:', error);
    // Return offline fallback if available
    return new Response('Offline', { status: 503 });
  }
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.warn('[SW] Network failed, serving from cache:', request.url);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const networkPromise = fetch(request)
    .then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => null);
  
  return cachedResponse || await networkPromise || new Response('Offline', { status: 503 });
}

// Fetch event handler
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip Firebase and external API requests
  if (url.hostname.includes('firebase') || 
      url.hostname.includes('googleapis.com') ||
      url.hostname.includes('gstatic.com') ||
      url.hostname.includes('tosspayments.com')) {
    return;
  }
  
  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  // Static assets (JS, CSS) - Cache first
  if (url.pathname.startsWith('/assets/')) {
    return cacheFirst(request, STATIC_CACHE);
  }
  
  // Images - Cache first with image cache
  if (request.destination === 'image' || 
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url.pathname)) {
    return cacheFirst(request, IMAGE_CACHE);
  }
  
  // HTML pages - Network first
  if (request.destination === 'document' || 
      url.pathname === '/' ||
      !url.pathname.includes('.')) {
    return networkFirst(request, DYNAMIC_CACHE);
  }
  
  // API requests - Network first
  if (url.pathname.startsWith('/api/')) {
    return networkFirst(request, DYNAMIC_CACHE);
  }
  
  // Everything else - Stale while revalidate
  return staleWhileRevalidate(request, DYNAMIC_CACHE);
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  // Handle any pending offline actions
  try {
    // This would sync any offline data when back online
    console.log('[SW] Performing background sync...');
    // Implementation depends on your offline strategy
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Push notification handler
self.addEventListener('push', (event) => {
  console.log('[SW] Push notification received');
  
  if (!event.data) {
    return;
  }
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/icon-192x192.svg',
    badge: '/icon-192x192.svg',
    tag: data.tag || 'echo-notification',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: '보기',
        icon: '/icon-192x192.svg'
      },
      {
        action: 'close',
        title: '닫기'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'ECHO 알림', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked');
  
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Error handling
self.addEventListener('error', (event) => {
  console.error('[SW] Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('[SW] Unhandled promise rejection:', event.reason);
});

console.log(`[SW] Service Worker v${VERSION} loaded`);