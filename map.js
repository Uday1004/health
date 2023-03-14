// Create an array to store the location data for each user
var userLocations = [
    { name: 'User 1', latitude: 22.7196, longitude: 75.8577 },
    { name: 'User 2', latitude: 22.7597, longitude: 75.8677 },
    { name: 'User 3', latitude: 22.7299, longitude: 75.8277 }
  ];
  
  // Create an array to store the feature objects for each user location
  var features = [];
  
  // Loop through the userLocations array and create a feature object for each user
  userLocations.forEach(function(location) {
    var point = new ol.geom.Point(ol.proj.fromLonLat([location.longitude, location.latitude]));
  
    var feature = new ol.Feature({
      geometry: point,
      name: location.name
    });
  
    features.push(feature);
  });
  
  // Create a new vector layer to display the user locations
  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: features
    }),
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 4,
        fill: new ol.style.Fill({
          color: 'rgba(255, 0, 0, 0.5)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(255, 0, 0, 1)',
          width: 2
        })
      })
    })
  });
  
  // Create a new map object
  var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      vectorLayer
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([75.8577,22.7196 ]),
      zoom: 12
    })
  });
  