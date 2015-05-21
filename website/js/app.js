 require([
          "esri/map", 
          "esri/dijit/Scalebar",
          "esri/layers/WebTiledLayer",
          "./js/bootstrapmap.js", 
          "dojo/domReady!"], 
          function(Map, Scalebar, WebTiledLayer, BootstrapMap) {
            <!-- Get a reference to the ArcGIS Map class -->
            var map = BootstrapMap.create("mapDiv",{
              basemap:'gray',
              center:[-117.1,33.6],
              zoom:9
            });

            var scalebar = new Scalebar({
              map: map,
              scalebarUnit: "dual"
            });

           $(document).ready(function(){
              $("#basemapList li").click(function(e) {
                var l, options;
                BootstrapMap.clearBaseMap(map);
                switch (e.target.text) {
                  case "Water Color":
                    
                   
                   options = {
                      id:'Water Color',
                      copyright: 'stamen',
                      resampling: true,
                      subDomains: ['a','b','c','d']
                    };
                    l = new WebTiledLayer('http://${subDomain}.tile.stamen.com/watercolor/${level}/${col}/${row}.jpg',options);
                    map.addLayer(l);
                    break;

                  case "MapBox Space":
                    
                    options = {
                      id:'mapbox-space',
                      copyright: 'MapBox',
                      resampling: true,
                      subDomains: ['a','b','c','d']
                    };
                    l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/eleanor.ipncow29/${level}/${col}/${row}.jpg',options);
                    map.addLayer(l);
                    break;

                  case "Pinterest":
                    options = {
                      id:'mapbox-pinterest',
                      copyright: 'Pinterest/MapBox',
                      resampling: true,
                      subDomains: ['a','b','c','d']
                    };
                    l = new WebTiledLayer('http://${subDomain}.tiles.mapbox.com/v3/pinterest.map-ho21rkos/${level}/${col}/${row}.jpg',options);
                    map.addLayer(l);
                    break;
                  case "Streets":
                    map.setBasemap("streets");
                    break;
                  case "Imagery":
                    map.setBasemap("hybrid");
                    break;
                  case "National Geographic":
                    map.setBasemap("national-geographic");
                    break;
                  case "Topographic":
                    map.setBasemap("topo");
                    break;
                  case "Gray":
                    map.setBasemap("gray");
                    break;
                  case "Open Street Map":
                    map.setBasemap("osm");
                    break;
                }
              });
            });
        });