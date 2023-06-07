import { getTodaysWeatherData } from "./getApiData";
import { assignTodaysWeatherData, assign7DayData } from "./assignApiData";
import { farenOrCel } from "./f_or_c";
import { get7DayWeatherData } from "./7dayForecastApiData";
document.querySelector("input").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    getTodaysWeatherData();
    assignTodaysWeatherData();
    get7DayWeatherData();
    assign7DayData();
    e.preventDefault();
  }
});

document.querySelector(".f-or-c").addEventListener("click", () => {
  farenOrCel();
  assignTodaysWeatherData();
  assign7DayData();
});
