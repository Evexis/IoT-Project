
window.onload = function() {



let addressPoints = [
    [50.062961, 19.923739, 0.0],
    [50.063894, 19.924093, 0.0],
    [50.066288, 19.925028, 0.3],
    [50.066953, 19.925355, 0.5],
    [50.066746, 19.926085, 0.3],
    [50.066515, 19.926868, 0.3],
    [50.065737, 19.927619, 0.0],
    [50.066235, 19.927613, 1.0],
    [50.065475, 19.927345, 0.7],
    [50.065024, 19.927447, 1.0],
    [50.064556, 19.927592, 0.7],
    [50.064294, 19.927662, 1.0],];

    
    
      
  let map = L.map('map').setView([50.06118281837115, 19.93778228759766], 14);
  
  let tiles = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',}).addTo(map);

/*$.getJSON("data",function(data){
  var locations = data.features.map(function(rat) {
    // the heatmap plugin wants an array of each location
    var location = rat.geometry.coordinates.reverse();
    location.push(0.5);
    return location; // e.g. [50.5, 30.5, 0.2], // lat, lng, intensity
  });
*/
  addressPoints = addressPoints.map(function (p) { return [p[0], p[1], p[2]] });
  
  let heat2 = L.heatLayer(addressPoints,{
    radius: 15,
    blur: 5, 
    maxZoom: 9,
    max: 1.0,
    minOpacity: 0.2,

    gradient: {
      0.3: '#009900',
      0.5: '#f9fb07',
      1: 'red'
    }
  }).addTo(map);
  for (var i = 0; i < addressPoints.length; i++) {
    var circle = L.circle([addressPoints[i][0], addressPoints[i][1]], {
    color: 'transparent',
    fillColor: 'transparent',
    fillOpacity: 1 ,
    radius: 15
}).addTo(map);
    circle.bindTooltip("PM2.5 = " + addressPoints[i][2]);
  }
  
/*  map.on('click', function(e) {        
    let popLocation= e.latlng;
    let popup = L.popup()
    .setLatLng(popLocation)
    .setContent("PM2.5: " + e.latlng.lat + ", " + e.latlng.lng)
    .openOn(map);        
});
*/
//var layers = L.control.layers({}, {'2.5PM' : new L.layerGroup(),'10PM' : new L.layerGroup()}).addTo(map);

//layer choice (2.5pm,10pm,temp)
var baseLayers = {
  "PM 2.5": tiles,
  "PM 10": tiles
};

var baseControl = L.control.layers(baseLayers).addTo(map);


};  


