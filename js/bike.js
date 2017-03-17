
function Bike(){
}

Bike.prototype.find = function(city, color, make, displayBike) {
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&manufacturer=' + make + '&location=' + city + '&distance=10&stolenness=proximity&frame_colors=' + color + '&access_token=ab24acd3ed8bffe04230ed7b746b35a0d8ad027b2dcc150fac3341def8eee73e').then(function(response) {
    console.log(response);
    response.bikes.forEach(function(bike) {
      if(color.length !== 0) {
        if($.inArray(color.charAt(0).toUpperCase() + color.slice(1), bike.frame_colors) > -1)
        {
          displayBike(bike.stolen_location, bike.frame_colors, bike.manufacturer_name);
        }
      }
      else {
          displayBike(bike.stolen_location, bike.frame_colors, bike.manufacturer_name);
      }

    }).fail(function(error) {
      $('#solution').text(error.responseJSON.message);
    });
  });
};
exports.bikeModule = Bike;
