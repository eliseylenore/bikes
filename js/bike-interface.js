var Bike = require('./../js/bike.js').bikeModule;

var displayBike = function(city, color, make) {
  $('#solution').append("<li>Bike city: <em>" + city + "</em> Color: <em>"+ color + "  </em>Make: <em>" + make + "</em></li>");
};

$(document).ready(function() {
  var currentBike = new Bike();

  $('form').submit(function(event) {
    event.preventDefault();
    var color = $('#color').val();
    var make = $('#make').val();
    var city = $('#city').val();
    var distance = $('#distance').val();
    var year = $('#year').val();
    $('#color').val("");
    $('#make').val("");
    $('#city').val("");
    $('#distance').val("");
    $('#year').val("");

    $("#solution").text("");
    var result = currentBike.find(city, color, make, displayBike);
  });
});
