import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import kecamatan from "./kecamatan.json";

// id = map-id
// custom icon
const icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
});
const map = L.map("map-id").setView(
    [-3.4997138463498842, 121.65710449218751],
    8
);
// L.tileLayer("http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}", {
//     maxZoom: 20,
//     subdomains: ["mt0", "mt1", "mt2", "mt3"],
// }).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);
const sidebar = document.getElementById("sidebar");
const content = (marker) => {
    return `
    <div class="relative md:static flex flex-col justify-center">
        <button id="close" class="z-[99999999999] absolute top-1 right-1 p-1.5 rounded-full bg-red-200/50 border border-red-600">
            <svg class="size-6 text-red-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>
        <img src="${marker.image}" alt="${marker.name}" class="w-full h-46 md:h-96 object-cover rounded-xl">
        <h1 class="text-3xl font-bold mt-4">${marker.name}</h1>
        <p class="text-sm text-justify mt-2">${marker.description}</p>
`;
};
const SM_SCREEN = 768;
const MD_SCREEN = 992;
markers.forEach((marker) => {
    L.marker([marker.lat, marker.lng], {
        icon,
    })
        .on("click", function () {
            const state = sidebar.getAttribute("data-state");
            const current = sidebar.getAttribute("data-current");
            if (state === "close" || current !== marker.id.toString()) {
                sidebar.setAttribute("data-state", "open");
                sidebar.setAttribute("data-current", marker.id);
                if (window.innerWidth > SM_SCREEN) {
                    sidebar.classList.add("md:translate-x-0");
                    sidebar.classList.remove("translate-y-0");
                } else {
                    sidebar.classList.add("translate-y-0");
                    sidebar.classList.remove("md:translate-x-0");
                }
                sidebar.innerHTML = content(marker);
                const close = document.getElementById("close");
                close.addEventListener("click", () => {
                    sidebar.setAttribute("data-state", "close");
                    sidebar.setAttribute("data-current", "");
                    sidebar.classList.remove("md:translate-x-0");
                    sidebar.classList.remove("translate-y-0");
                    sidebar.innerHTML = "";
                });
            } else if (state === "open" && current === marker.id.toString()) {
                sidebar.classList.remove(
                    "md:translate-x-0",
                    "translate-y-[60vh]"
                );
                sidebar.setAttribute("data-state", "close");
                sidebar.setAttribute("data-current", "");
            } else if (state === "open" && current !== marker.id.toString()) {
                sidebar.setAttribute("data-current", marker.id);
                sidebar.innerHTML = content(marker);
            }
        })

        .bindPopup(marker.name)
        .bindTooltip(marker.name)
        .addTo(map);
});

// fetch
L.geoJSON(kecamatan, {
    style: function (feature) {
        return {
            color: "blue",
            weight: 2,
        };
    },
}).addTo(map);
