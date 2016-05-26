var apiKey = require('./../.env').apiKey;
var Weather = require('./../js/weather-app.js').Weather;

var displayHumidity = function(city, humidityData, celciusData, fahrenheitData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
  $(".showCelcius").text("The temperature in Celcius in " + " is " + celciusData);
   $(".showFahrenheit").text("The temperature in Fahrenheit in " + " is " + fahrenheitData);
};
$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
