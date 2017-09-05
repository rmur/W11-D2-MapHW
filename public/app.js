var initialize = function(){
  // var chicago = {lat: 41.878114 , lng: -87.629798};
  var center = {lat: 51.507351, lng: -0.127758};
  var mapDiv = document.getElementById('main-map');
  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addMarkerWithInfo(center);
  mainMap.addClickEvent();
  
  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var chicagoButton = document.querySelector('#button-chicago');
  chicagoButton.addEventListener('click', mainMap.toChicago.bind(mainMap));


}


window.addEventListener('load', initialize);