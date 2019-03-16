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
    success: succe,
  });


  function succe(weather) {
    $('.get-weather').html(weather.description);
    $('.get-weather').append(weather.temperature);
  }
}