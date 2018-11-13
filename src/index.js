var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1IjoiYmlpbGwiLCJhIjoiY2pvZzhmZzhsMDl6ODN2bXcwbHNwbnV2ZiJ9.PRZ-LibG-F-Sb32FPu0-Jw";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});

const iconURLs = {
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
  activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

function buildMarker(type, coords) {
  let markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === "hotel") url = iconURLs.hotels;
  else if (type === "restaurants") url = iconURLs.restaurants;
  else url = iconURLs.activities;
  markerDomEl.style.backgroundImage = url;

 new mapboxgl.Marker(markerDomEl).setLngLat(coords).addTo(map);
}

buildMarker("restaurants", [-74.009151, 40.705086]);
