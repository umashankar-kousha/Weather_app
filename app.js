import { API_KEY } from "./config.js";

let city = "hyderabad";
let weatherIconEl = document.getElementById("weatherIcon");
let searchCityEl = document.getElementById("searchCity");
let searchBtnEl = document.getElementById("searchBtn");
let cityEl = document.querySelector(".city");
let temparetureEl = document.getElementById("tempareture");
let descriptionEl = document.getElementById("description");
let humidityEl = document.getElementById("humidity");
let windSpeedEl = document.getElementById("windSpeed");
let feelsLikeEl = document.getElementById("feelsLike");

function callApi() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const imageCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${imageCode}@2x.png`;
        weatherIconEl.src = iconUrl;
        cityEl.textContent = data.name;
        temparetureEl.textContent = (data.main.temp - 273.15).toFixed(1);
        descriptionEl.textContent = data.weather[0].description;
        humidityEl.textContent = data.main.humidity;
        feelsLikeEl.textContent = (data.main.feels_like - 273.15).toFixed(1);
        windSpeedEl.textContent = data.wind.speed;
      } else {
        alert(` ${data.message}`);
      }
    })
    .catch((error) => {
      console.error(error);
      searchCityEl.value = "";
    });
}

callApi();

searchBtnEl.addEventListener("click", () => {
  city = searchCityEl.value;
  searchCityEl.value = "";
  callApi();
});
