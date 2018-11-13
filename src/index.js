var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYmlpbGwiLCJhIjoiY2pvZzhmZzhsMDl6ODN2bXcwbHNwbnV2ZiJ9.PRZ-LibG-F-Sb32FPu0-Jw';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
  });
  
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "http://i.imgur.com/WbMOfMl.png";
  new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

  