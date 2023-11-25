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
    
    <script>
    // scripts will go here
    // Get current latitude and longitude using Geolocation API
    navigator.geolocation.getCurrentPosition(getWeather);

    // Function to fetch weather data based on latitude and longitude
    function getWeather(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      const apiKey = 'YOUR_API_KEY';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      // Fetch weather data from OpenWeatherMap API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => {
          console.error('Error:', error);
          document.getElementById('weatherElement').innerHTML = '<p>Failed to fetch weather data.</p>';
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
