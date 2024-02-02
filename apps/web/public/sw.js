// service-worker.js

const cacheName = "my-cache";
const staticAssets = ["/*", "/_astro/*"];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(staticAssets)
    })
  )
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse.ok) {
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse
          })
        }

        return networkResponse
      })
    })
  )
})
