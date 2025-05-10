// // Get coordinates from a global variable set in your EJS file
// const latitude = window.listingLat;
// const longitude = window.listingLng;

// // Initialize the map
// const map = L.map('map').setView([latitude, longitude], 13);

// // Add OpenStreetMap tiles
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
// }).addTo(map);

// // Add a marker
// L.marker([latitude, longitude])
//     .addTo(map)
//     .bindPopup(window.listingTitle)
//     .openPopup();
