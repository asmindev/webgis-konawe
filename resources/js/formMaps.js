import L from "leaflet";
import "leaflet/dist/leaflet.css";

function initializeMap() {
    const lat = document.getElementById("lat");
    const lng = document.getElementById("lng");
    const map = L.map("map-id").setView([-3.9235646, 122.5169601], 12); // Atur peta dengan koordinat dan zoom level
    L.tileLayer("http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
    }).addTo(map);
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     attribution:
    //         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);

    map.on("click", function (e) {
        lat.value = e.latlng.lat;
        lng.value = e.latlng.lng;

        lng.dispatchEvent(new Event("input"));
        lat.dispatchEvent(new Event("input"));

        L.marker([e.latlng.lat, e.latlng.lng])
            .addTo(map)
            .on("click", function () {
                // remove marker
                map.removeLayer(this);
            });
    });

    return map;
}

document.addEventListener("DOMContentLoaded", function () {
    initializeMap();
});

document.addEventListener("livewire:load", function () {
    console.log("livewire:update");
    // initializeMap();
});
