'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "672eb91b949f872f7023cedd81849d5c",
"version.json": "0fdeda23c079da8202c01c9110380a22",
"index.html": "1efa6f2470324c2b94bae13153363046",
"/": "1efa6f2470324c2b94bae13153363046",
"main.dart.js": "28f8a8c6d3e4c6c6dd766ecffe966c4c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "ec226317b4bf41fbfffcaa254828bb93",
"icons/favicon.ico": "f73ca28bfaa77b6e36ca860b1e55fe8a",
"icons/apple-icon.png": "1799056308557e06b19c5e518dc3027b",
"icons/apple-icon-144x144.png": "c3a49dc54570ae70147ce7a293d7340b",
"icons/android-icon-192x192.png": "fed5ba5de2c3a0f74c2fd53b49c97c51",
"icons/apple-icon-precomposed.png": "1799056308557e06b19c5e518dc3027b",
"icons/apple-icon-114x114.png": "fcf727b437ec3704ad0e70fe31a225ea",
"icons/ms-icon-310x310.png": "d599f68dc6d30de80f70f00d1fb98fa7",
"icons/ms-icon-144x144.png": "c3a49dc54570ae70147ce7a293d7340b",
"icons/apple-icon-57x57.png": "4170f30a19283472d3fc281c3ade5584",
"icons/apple-icon-152x152.png": "7b5fbf02920292490c8d0bfb2a0f28f5",
"icons/ms-icon-150x150.png": "613a9a4c5de11fa54f096b7805889752",
"icons/android-icon-72x72.png": "8232aad79be90467be86644458b677fb",
"icons/android-icon-96x96.png": "60815c82656f2f712c24b5515205176c",
"icons/android-icon-36x36.png": "9bf635435e117db62a9c166ffc381757",
"icons/apple-icon-180x180.png": "78a426580f371c416c97517d2f4d0e45",
"icons/favicon-96x96.png": "60815c82656f2f712c24b5515205176c",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "c8021a91c4d20c546eb7c7a0d5ee1fa8",
"icons/apple-icon-76x76.png": "d1aabccaddb97230a1b20e08c3edc4f2",
"icons/apple-icon-60x60.png": "55e70864e546bfdf0321c6711f3ee1ff",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "c3a49dc54570ae70147ce7a293d7340b",
"icons/apple-icon-72x72.png": "8232aad79be90467be86644458b677fb",
"icons/apple-icon-120x120.png": "4d5a3083226c1340df7e0b998909b8f8",
"icons/favicon-32x32.png": "87c876a1d2c96287eb07083c451f2e5e",
"icons/ms-icon-70x70.png": "fc1cd009d00ff37c2fc05e64a9582be0",
"style.css": "98aa114efa49556197e89dbcfad3ab15",
"manifest.json": "2f7d7469d264796008ec8da51f68000f",
"assets/AssetManifest.json": "6b9bd91b5ca176fa5c02ffee43a89164",
"assets/NOTICES": "9dee86b53bf394816c06219632efebde",
"assets/FontManifest.json": "a7d810300962723ecca1e05cacda2caf",
"assets/AssetManifest.bin.json": "e325270404d91121388a23c6b520e3dd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "7d0f296adbf3ede20f61086fb110dc68",
"assets/fonts/AdventPro/AdventPro_SemiExpanded-Regular.ttf": "d0990c367107da5cf5804c85ff78ee14",
"assets/fonts/AdventPro/AdventPro-SemiBold.ttf": "e8d7abede05877b551752cf3a09e665e",
"assets/fonts/AdventPro/AdventPro-Medium.ttf": "fc8b6276aadefe01a949ffda840f2f13",
"assets/fonts/fs-tahoma-8px.ttf": "fcadd0881e9ac18883f1f491cbebdb02",
"assets/fonts/MaterialIcons-Regular.otf": "e6ea4217856557bcdae276b31d5de6bc",
"assets/fonts/trebuchetms.ttf": "48c4ef39806ef76eaeced814b8a5705c",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/svg/win.svg": "ee03fbe1400c11407bf7f82eeb8ba6bb",
"assets/assets/svg/PDF_file_icon.svg": "a8feaf8ea80c17228a67dfeb1e251d8f",
"assets/assets/images/tg.png": "bd7aef31a20a566612045eb8e9c6b582",
"assets/assets/images/email.png": "5652013bdf5fd9a324176bccafc40b4d",
"assets/assets/images/wup.png": "ac208ebf57c2ef6924561766d9f22b6b",
"assets/assets/images/in.png": "8abf91f5351f60a71090833700b42fe7",
"assets/assets/images/moon.png": "f97c133724eec7cd5e3edd1cb0913072",
"assets/assets/images/github-mark.png": "3c7ece02c48750293fbc09562715b5d2",
"assets/assets/images/sun.png": "55c891a7f207f09c6cb7d208d5b9ce19",
"assets/assets/images/bliss.png": "d8757aedf4e839f840695c2d651a3a57",
"assets/assets/images/avatar.jpeg": "fc98e634950bcec4c3d2642a5e8e5571",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "6b390003b06088cd4955caa1ca737415",
"canvaskit/canvaskit.js.symbols": "6ae93ae7c4f62a1ae895fdc5e4cb425c",
"canvaskit/skwasm.wasm": "7cdd9ea7b374fe73665924e4cec653d8",
"canvaskit/chromium/canvaskit.js.symbols": "01e9c0d26c27afa2d25c7d9e531f82c8",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "3391ca79a3c499e827663d269a98bf7d",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "93fb835c74a85ad533eb21364e9d3c89",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
