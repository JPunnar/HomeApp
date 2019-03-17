$(document).ready(function(){
  $('.get-weather').click(getWeather);
});

function getWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(makeApiCall);
  } else {
    $('.get-weather').html("Geolocation is not supported by this browser.");
  }
}

function makeApiCall(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  data = {
    latitude: latitude,
    longitude: longitude
  }

  $.ajax({
    type: "POST",
    url: 'weather',
    data: data,
    success: render_weather,
  });


  function render_weather(weather) {
    $this = $('.weather-info')
    $this.html('temperature: ' + weather.temperature + ' °C');
    $this.append('<br>');
    $this.append('description: ' + weather.description);
    $this.append('<br>');
    $this.append('humidity: ' + weather.humidity);
    $this.append('<br>');
    $this.append('visibility: ' + weather.visibility);
    $this.append('<br>');
    $this.append('wind: ' + weather.wind);
  }
}