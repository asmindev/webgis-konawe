import L from "leaflet";

const latlngs = [
    L.latLng(51.505, -0.09),
    L.latLng(51.5, -0.1),
    L.latLng(51.5, -0.12),
];

export const polyline = L.polyline(latlngs, { color: "red" });
