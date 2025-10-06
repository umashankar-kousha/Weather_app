let city = "vijayawada";
let weatherIconEl = document.getElementById("weatherIcon");
let searchCityEl = document.getElementById("searchCity");
let searchBtnEl = document.getElementById("searchBtn");
let cityEl = document.querySelector(".city");
let temparetureEl = document.getElementById("tempareture");
let descriptionEl = document.getElementById("description");
let humidityEl = document.getElementById("humidity");
let windSpeedEl = document.getElementById("windSpeed");
let feelsLikeEl = document.getElementById("feelsLike");

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=880d55c48caf7a40d704c6bea0c37f6d`
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const imageCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${imageCode}@2x.png`;
    weatherIconEl.src = iconUrl;
    cityEl.textContent = data.name;
    temparetureEl.textContent = Math.floor(data.main.temp / 10, 3);
    descriptionEl.textContent = data.weather[0].description;
    humidityEl.textContent = data.main.humidity;
    feelsLikeEl.textContent = Math.floor(data.main.feels_like / 10);
    windSpeedEl.textContent = data.wind.speed;
  })
  .catch((err) => {
    console.error(err);
  });
