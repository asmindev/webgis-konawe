// -3.9903524127910486, 122.4945150635314
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getCurrentLocation } from "./utils/getLocation";
var map = L.map("map-id").setView([-3.9903524127910486, 122.4945150635314], 12);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

getCurrentLocation().then((coords) => {
    console.log(coords);
    L.marker([coords.latitude, coords.longitude])
        .addTo(map)
        .bindPopup("You are here")
        .openPopup()
        .on("click", function () {
            toastify().success("Your action was successful!");
        });
});

axios
    .get("/storage/indonesia-province.json")
    .then(function (response) {
        L.geoJSON(response.data, {
            style: function (feature) {
                return {
                    fillOpacity: 0,
                    color: "orange",
                };
            },
        }).addTo(map);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("complete");
    });

axios
    .get("/storage/kota-kabupaten.json")
    .then(function (response) {
        L.geoJSON(response.data, {
            style: function (feature) {
                return {
                    color: "blue",
                    weight: 1,
                };
            },
        }).addTo(map);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("complete");
    });
