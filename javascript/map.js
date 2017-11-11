window.onload = function(){
  var map = new ol.Map( {
          layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            })
          ],
          target: 'map',
          controls: ol.control.defaults({
            attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
              collapsible: false
            })
          }),
          view: new ol.View({
            center:[-45.8629742, -23.2877419],
            zoom: 11,
            projection: ol.proj.get("EPSG:4326")
          })
        });

  var addLayer = function(mapa, layer) {
    try{
      mapa.addLayer(layer);
      $("#layers > ul").prepend("<li data-id='" + layer.get('id') + "'><input checked type='checkbox'/> <span>" + layer.get('name') + "</span></li>");
    }
    catch(err){
      
    }
  };
}