/**
 * This is the short cut way of declaring $(document).ready()
 * */
//$(function () {
//  alert('Welcome to Doggy Day Care! We love dogs');
//});

var map;
function loadMap() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(40.748817, -73.985428)
  };
  var mapid = document.getElementById('mapped');
  map = new google.maps.Map(mapid, mapOptions);
}

google.maps.event.addDomListener(window, 'load', loadMap());