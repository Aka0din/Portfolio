
var map = L.map('map').setView([48.87052100566099, 2.2938119538909745], 13);

var Stadia_Outdoors = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

Stadia_Outdoors.addTo(map);

var marker = L.marker([48.87052100566099, 2.2938119538909745]).addTo(map).bindPopup('30 Rue la Pérouse, 75016 Paris').closePopup();

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
});