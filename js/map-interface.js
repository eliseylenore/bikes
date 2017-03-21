var Map = require('./../js/map.js').mapModule;

$(document).ready(function() {
  $('button').click(function(){
    var map = new Map();
    map.initMap();
  });
});
