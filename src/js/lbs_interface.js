var mymap = L.map('mapid').setView([39.952320, -75.164123], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibndlYnoiLCJhIjoiY2lsc3NvMWI4MDA2MHUwa3NhZ2xvejJqdiJ9.3aR1Ye5KYmMMGgrUeBvYkw'
}).addTo(mymap);

L.control.locate().addTo(mymap);
