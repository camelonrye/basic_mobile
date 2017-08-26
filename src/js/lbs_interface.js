var mymap = L.map('mapid').setView([39.952320, -75.164123], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibndlYnoiLCJhIjoiY2lsc3NvMWI4MDA2MHUwa3NhZ2xvejJqdiJ9.3aR1Ye5KYmMMGgrUeBvYkw'
}).addTo(mymap);

var skatespots_phl = "https://gist.githubusercontent.com/nwebz/cfd639436c6f4bbbb27f1935ff3adc09/raw/da9fb6e963588b3568c31daf150268713a96d7ee/map.geojson"

$.getJSON(skatespots_phl, function(data) {
   L.geoJson(data).addTo(mymap); 
    });


var megabus_stops = "https://gist.githubusercontent.com/nwebz/2e050439c90971f6b9d0774b7dcd5179/raw/1db13038ee345e55e65e92a2d677e0b645a77c28/map.geojson"

$.getJSON(megabus_stops, function(data) {
   L.geoJson(data).addTo(mymap); 
    });

L.control.locate().addTo(mymap);
