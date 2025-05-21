self.addEventListener("install", function (event) {
  console.log("📦 Service Worker installed");
});

self.addEventListener("fetch", function (event) {
  // Boleh tambah cache logic kat sini
});