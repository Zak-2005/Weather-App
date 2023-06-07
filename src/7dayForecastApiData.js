export async function get7DayWeatherData() {
    let location = document.querySelector("input").value;
    let response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2e3b564a59934e5987d160916230306&q=${location}&days=8`,
      { mode: "cors" }
    );
     let weatherData = await response.json();
     console.log(weatherData);
     return weatherData;
  }
  
   