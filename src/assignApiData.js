import { getTodaysWeatherData } from "./getApiData";
import { get7DayWeatherData } from "./7dayForecastApiData";

export async function assignTodaysWeatherData() {
  const weatherData = await getTodaysWeatherData();

  const location = document.querySelector("#location");
  location.textContent =
    weatherData.location.name + ", " + weatherData.location.region;

  const date = document.querySelector(".date");
  date.textContent = weatherData.location.localtime;

  const condition = document.querySelector(".condition");
  condition.textContent = weatherData.current.condition.text;

  const conditionIcon = document.querySelector(".icon");
  conditionIcon.src = weatherData.current.condition.icon;

  const temp = document.querySelector(".temp");
  const feelsLike = document.querySelector(".feelsLike");
  if (document.querySelector(".f-or-c").textContent === "Display Celsius") {
    temp.textContent = "Temp: " + weatherData.current.temp_f + "°F";
    feelsLike.textContent =
      "Feels Like: " + weatherData.current.feelslike_f + "°F";
  } else {
    temp.textContent = "Temp: " + weatherData.current.temp_c + "°C";
    feelsLike.textContent =
      "Feels Like: " + weatherData.current.feelslike_c + "°C";
  }

  const humidity = document.querySelector(".humidity");
  humidity.textContent = "Humidity: " + weatherData.current.humidity + "%";

  const chanceOfRain = document.querySelector(".chanceOfRain");
  chanceOfRain.textContent =
    "Chance of Rain: " + weatherData.current.precip_in + "%";

  const windSpeed = document.querySelector(".windSpeed");
  windSpeed.textContent = "Wind Speed: " + weatherData.current.wind_mph + "mph";
}

export async function assign7DayData() {
  const weatherData = await get7DayWeatherData();
  const forecast = await weatherData.forecast.forecastday;

  for (let i = 1; i < forecast.length; i++) {
    const dayInfo = document.querySelector(`.day${i}`).childNodes;
    dayInfo[0].textContent = forecast[i].date;
    if (document.querySelector(".f-or-c").textContent === "Display Celsius") {
        dayInfo[1].textContent = "Temp: " + forecast[i].day.avgtemp_f + "°F";
      } else {
        dayInfo[1].textContent = "Temp: " + forecast[i].day.avgtemp_c + "°C";
      }
    dayInfo[5].src = forecast[i].day.condition.icon;
  }
}
