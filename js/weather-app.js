var apiKey = require('./../.env').apiKey;

var convertToCelcius = function(kelvin) {
  return kelvin - 273.15;
};
var convertToFahrenheit = function(kelvin) {
  return kelvin * 1.8 - 459.67;
};

exports.Weather = function(){
};

exports.Weather.prototype.getWeather = function(city, displayFunction) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    debugger;
    var celcius = convertToCelcius(response.main.temp);
    var fahrenheit = convertToFahrenheit(response.main.temp);
    displayFunction(city, response.main.humidity, celcius, fahrenheit);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
};
