var apiKey = require('./../.env').apiKey;


var convertToCelcius = function(kelvin) {
  return kelvin - 273.15;
}
var convertToFahrenheit = function(kelvin) {
  return kelvin * 1.8 - 459.67;
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)
{
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
      $(".showCelcius").text("The temperature in Celcius in " + " is " + convertToCelcius(response.main.temp));
      $(".showFahrenheit").text("The temperature in Fahrenheit in " + " is " + convertToFahrenheit(response.main.temp));
    })
  });
});
