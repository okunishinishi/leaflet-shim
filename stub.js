'use strict'

try {
  module.exports = require('leaflet')
} catch (e) {
  // Failed on server side
  module.exports = {
    TileLayer: function TileLayer () {},
    Tooltip: function Tooltip () {},
    Popup: function Popup () {},
    Layer: function Layer () {},
    LayerGroup: function LayerGroup () {},
    FeatureGroup: function FeatureGroup () {},
    CircleMarker: function CircleMarker () {},
    Renderer: function Renderer () {},
    Path: function Path () {},
    Polyline: function Polyline () {},
    Map: function Map () {},
    Rectangle: function Rectangle () {},
    Canvas: function Canvas () {},
    DivOverlay: function DivOverlay () {},
    DivIcon: function DivIcon () {},
    Icon: function Icon () {},
  }

}
