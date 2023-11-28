<!DOCTYPE html>
<html>
<head>
  <head>
    <!--
    Charmaine Washington, November 24, Lab11X, GDS089 JavaScript
    -->
    <meta charset='utf-8' />
    <meta name="viewport" content="width=device-width" /> 
    <title>Charmaine's Weather Page</title>
    <style>
    /* styles go here */

    </style>
  </head>

  <body>
    <h1>Charmaine's Weather Page</h1>
    <!-- page content will go here -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script>
  // scripts will go here
  // Get current latitude and longitude using Geolocation API
  navigator.geolocation.getCurrentPosition(getWeather);

  // Function to fetch weather data based on latitude and longitude
  function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const apiKey = '13c65dd6bbea15f9fe6de6b5954f1e62';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    // Use AJAX to fetch weather data from OpenWeatherMap API
    $.ajax({
      url: apiUrl,
      type: "GET",
      dataType: "json",
      success: function (data) {
        displayWeather(data);
      },
      error: function (error) {
        console.error('Error:', error);
        document.getElementById('weatherElement').innerHTML = '<p>Failed to fetch weather data.</p>';
      }
    });
  }

  // Function to display weather data
  function displayWeather(data) {
    const weatherElement = document.getElementById('weatherElement');

    const temperature = Math.round(data.main.temp - 273.15); // Convert to Celsius
    const description = data.weather[0].description;
    const city = data.name;

    const weatherHTML = `
      <h2>${city}</h2>
      <p>${temperature}°C</p>
      <p>${description}</p>
    `;

    weatherElement.innerHTML = weatherHTML;
  }
  </script>
</body>
</html>
