var mymap = L.map('mapid').setView([40.7128, -74.0059], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibndlYnoiLCJhIjoiY2lsc3NvMWI4MDA2MHUwa3NhZ2xvejJqdiJ9.3aR1Ye5KYmMMGgrUeBvYkw'
}).addTo(mymap);

var skatespots_phl = "https://gist.githubusercontent.com/nwebz/5370e3e5afaf0e35b616ee1a5056f9ba/raw/5d691b7aa0f487c67f9e50d1cfdfeaac1e50f020/map.geojson"

$.getJSON(skatespots_phl, function(data) {
  L.geoJson(data).addTo(mymap);
});


var megabusIcon = L.icon({
  iconUrl: 'src/lib/css/bus_marker.png',
  iconSize: [60,50]
});

L.marker([40.74652, -73.993835],{
  icon: megabusIcon
}).addTo(mymap);

L.control.locate().addTo(mymap);
