
$( document ).ready(function() { //odrazu jak to możliwe wrzuca nam mapke
setTimeout(function() { window.location=window.location;},150000); // działa na wszystkich przegladarkach


    var addressPoints = [];

    var Result = function (lat, lng, intensity) {
        this.lat = lat;
        this.lng = lng;
        this.intensity = intensity;
        this.date1 = date1;
    }
    $.getJSON("https://iot-eit.herokuapp.com/api/data?fbclid=IwAR3tXW_KAH_P2-4Q5oZaVGgWYkKrQNy_jiLaUrHj4IJqE8zvM1F1ZXcTIcs", function (data) {
        $.each(data, function (i, val) {
            if (val.location !== undefined ) {
                let result = [];
                result.push(val.location.latitude.value);
                result.push(val.location.longitiude.value);
                result.push(val.results.pm1.value);
                addressPoints.push(result);
            }
        });
        addToolTip();
        addPopUp();

    });


  let map = L.map('map').setView([50.06118281837115, 19.93778228759766], 14);
  
    let baselayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',}).addTo(map)
  
  

  addressPoints = addressPoints.map(function (p) { return [p[0], p[1], p[2]] });

  let heat1 = L.heatLayer(addressPoints,{
    radius: 15,
    blur: 5, 
    maxZoom: 9,
    max: 500.0,
    minOpacity: 0.2,

    gradient: {
      0.3: '#009900',
      0.5: '#f9fb07',
      1: 'red'
    }
  });


map.addLayer(heat1);


//layer choice (2.5pm,10pm)
var baseLayers = {
  "PM 2,5": baselayer,
  "PM 10": baselayer
};

L.control.layers(baseLayers).addTo(map);


var legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML += "<h4>Legend</h4>";
  div.innerHTML += '<i style="background: #ff0000"></i><span>Hazardous</span><br>';
  div.innerHTML += '<i style="background: #FF4500"></i><span>Unhealthy</span><br>';
  div.innerHTML += '<i style="background: #f9fb07"></i><span>Moderate</span><br>';
  div.innerHTML += '<i style="background: #009900"></i><span>Good</span><br>';
  
  return div;
};

legend.addTo(map);
    function addToolTip()  {
        for (let i = 0; i < addressPoints.length; i++) {
            let circle = L.circle([addressPoints[i][0], addressPoints[i][1]], {
                color: 'transparent',
                fillColor: 'transparent',
                fillOpacity: 1,
                radius: 15
            }).addTo(map);
            circle.bindTooltip("PM2.5 = " + addressPoints[i][2]);
        }
    }
    function addPopUp(){
        map.on('click', function(e) {
            let popLocation= e.latlng;
            let popup = L.popup()
                .setLatLng(popLocation)
                .setContent("Location: " + e.latlng.lat + ", " + e.latlng.lng)
                .openOn(map);
        });
    }
});



