const map = L.map("maps").setView(
    [-3.4997138463498842, 121.65710449218751],
    10
);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

document.addEventListener("DOMContentLoaded", function () {
    const lat = document.getElementById("lat");
    const lng = document.getElementById("lng");
    // map.on("click", function (e) {
    //     lat.value = e.latlng.lat;
    //     lng.value = e.latlng.lng;
    //     L.marker([e.latlng.lat, e.latlng.lng])
    //         .addTo(map)
    //         .on("click", function () {
    //             // remove marker
    //             map.removeLayer(this);
    //         });
    // });
    return map;
});
