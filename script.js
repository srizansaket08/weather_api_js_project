const apiKey = "161f541390b1ecedcc2191495f9baf7c"; // Replace with your OpenWeatherMap API Key
const getWeatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      cityName.textContent = `Weather in ${data.name}, ${data.sys.country}`;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      description.textContent = `Condition: ${data.weather[0].description}`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
    })
    .catch(error => {
      alert(error.message);
    });
});
