'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "82e0f053b4f81a303138dbc1d185896e",
"index.html": "9b7c44542eb2dfcf1911edec8c9c8365",
"/": "9b7c44542eb2dfcf1911edec8c9c8365",
"main.dart.js": "cee7bdc9ab7510f93f12e4017940ecdf",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "05c742c3b24b76570d347b2b2720f0b9",
".git/ORIG_HEAD": "960de6f03bfaf36228a42c7d5de7986b",
".git/config": "b44a46a923fd876fea26b1be5734781d",
".git/objects/59/be5a3eab4db6ec0ed33e164c929936a8f1db2a": "a39097163148a30847ae3b6196812e98",
".git/objects/66/7d9f0888753308f24b2b7973d7e89a4e7670e5": "3619669c95a9d4706943d3620352619f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/e5c854eb1b77fc4952b698dbbd2a7eba73c435": "d4d60068f610001e940913a8b9b1925c",
".git/objects/32/a9662d4b3d03420a135ab4938108e7761d5b75": "b9f02c34298e1395a525f97ade3ab593",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/f38f29e13569229909a7c56eb267f046bb3c71": "9d0c842e4f2c91eccdef79a8894e4b42",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/ad6759e2bbe149075b3a69f3fd9b9e6f3734fc": "9be73f271b07d9be76281fd3369baba3",
".git/objects/34/0e929cdd6f4c10012d86e023e9e5d882122121": "8676cd451e31321204e53e4a6fed3ef6",
".git/objects/5a/7d5b003f86ef907180d6eb03999e4d023f7841": "0739069e6f3bb62b62830b1717a7c93b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/2d28b7fa9173b9d4245f9afcb9a4b69362ed87": "4287d855101ecccd1062b9860be0a7cf",
".git/objects/bb/283324737d74ff6303438c8ba3ea21b0dd4dce": "2ece2a8b2a3c131912158610d7aaa6bd",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/45ecb4aadb7b7665dd742e6915dcae4d7bbf07": "68aa37c71131b02e0422be55c6d20344",
".git/objects/a5/d9563d2e1031927daa76378834b542ef5c5639": "f1d98a9b1e9adcf3aa659a45f0b5427e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/4eb9d9942cd210955a5551024663a29082526c": "8922755a140acbf40e667b6855927847",
".git/objects/fb/adccde29fc3dab2cded15f8bf822e20e3cc766": "035062da3bda885c324bfd26b13d512e",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/18/8421acae5290f7a2ac05a3449ee6b08b2882aa": "eadefdbbd46e5d2cdf75e395fd93abd4",
".git/objects/4b/df80b26d0ba23c42726124007daf97d40bed46": "4f0e8d8b9c212bf08bf4a8062d282faa",
".git/objects/73/49a0e4fe96a896bad49829d652813d5503caf8": "315860be2143c056057ed34ed81fce4a",
".git/objects/1a/da0cb61d2a509862acb144ef7ec74e9b567c4e": "cfa567be23a344edfd130aec298ee8bf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/623238d2e6c591fccba079d02dd9ac70af4fae": "1a8912b0c10ce32980eb19dfae5a8e25",
".git/objects/2a/2c155a9618e5767041d6e21938d1dae2560340": "2c4538ae703bf2b6b2c77574a3dffe37",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/2f0ac3f37a452f32c3a11e301fa0bd22cd323c": "741af8dfac149709337dade4576a7772",
".git/objects/9a/40b982baba8d8148a791d1895511230de14d9c": "88bd4b013e98d6d7fefbbd050f049deb",
".git/objects/91/ebd7f623c83462ada6b1a3fc79f7c75051e70e": "7450e8f0d6512585315bf33803b96607",
".git/objects/91/4b520cb6a4635ba9a6095544839e8479d3d1cb": "d48b2a8f401c0e4066e646615ea3ade5",
".git/objects/62/3d0575cfed8ad22f1a3b183d5ad1022e594b27": "2d639d9d1d210b64767bf22c8fa499e7",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3a/c67b0e54ad8253e87bbae67c52e17ef27bd4dd": "83278d572f3941b1892dbbff9702d6b9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/55/3cd805682d2a7c25bed353e95b13746704ca66": "15ad17a4ef37b79e30c53d750284c2af",
".git/objects/0a/bb74429bf0835beb9e88d1f6e418150a561515": "666d75e55857158e95c6bcc7dd63057d",
".git/objects/d3/30b0acccb674900ef075daf07852db55b15e53": "cc91b7ce270683409dc351071b0d7c84",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/7d6d354f3d9756817ac507d4a5665357a148a8": "847ff85aa77ac60c65afc8fa85c16556",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/fa/4bda2042208e5582b56e842acd676b7a18eeb9": "18417ac1f82b792f73053fbfa480152e",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/1144f66eb4488e5227629d933290079151dc4e": "1d3fb4ed62c679879ed3c4ae81232a38",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/12/14edc760f24fec5b39c6a1ac3316f00102b114": "ad841f105a0ea629403bf2fe424d456f",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/49/f729a72d5663891c8e17b5ad29bbd0fd7d7985": "1c7e5b5b2e474bb2608ca6967af4555e",
".git/objects/49/830d93ebb79f147a633001db85eae298761807": "af5339baa685a9ffcd5f54a42e5abaa0",
".git/objects/14/3cc28d4c10a0d33420dd8baf590ea4e7e3d611": "88c2e5f12d7c8f495b3a5c5324b2ef64",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/22/f32651d194c8cf1d8940bcbc15c7055ae18501": "6c6e48a6842890af8ad3137656adc635",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "b1060c022cbcddbe58075c51a26b5f68",
".git/logs/refs/heads/gh-pages": "4ed9d04194237180e9bd490d693c3d63",
".git/logs/refs/heads/master": "e9b396a2c66c4e7a6d6f7ed4da3f650b",
".git/logs/refs/remotes/origin/gh-pages": "e2c217773a95c06b164a910020db29c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/gh-pages": "a9769966a14c7a2b13f93ae7ff46a14f",
".git/refs/heads/master": "a8228f5ce8abd3b64c2bff4cd97ab283",
".git/refs/remotes/origin/gh-pages": "a9769966a14c7a2b13f93ae7ff46a14f",
".git/index": "c62ed42f9f915c7316a43d65e44458ca",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "d53580f14aa1e046a6fd93daaa35d2f7",
".git/FETCH_HEAD": "c2d4312e8a115ee85128209c77e0ea6d",
"assets/AssetManifest.json": "07bdec898fc184d4410ecec16a5d6f69",
"assets/NOTICES": "73763e33974f8bef289728ca36ea5888",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5065144d7e9a4d6f7ecbb05e65c6fd66",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/images/swaylogofinal.png": "a7422df682cce5d9990252055cc76608",
"assets/assets/images/green_wall.png": "e2b9b71e29f19319573be2a13c29fff6",
"assets/assets/images/swaylogofinaltransparent.png": "08f6663ab179ca50fb59626e231300b6",
"assets/assets/images/swaylogotransparent.png": "134562d1974e79f462bd3610bba65cf0",
"assets/assets/images/swaylogo.JPG": "ae193ffac4a5986e5bc0e22e1c021f3a",
"assets/assets/images/swaygreenwall.png": "a0d2a253aa0b28ebfe61f2b1f3adda18",
"assets/assets/images/green_wall2.png": "f4f56e1fa6bfc8fe2b5394b30ccc7144",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
