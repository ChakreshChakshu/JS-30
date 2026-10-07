// WMO Weather code interpretations
function getWeatherMeta(code) {
  if (code === 0) return { text: "Clear Sky", icon: "☀️" };
  if (code === 1 || code === 2) return { text: "Partly Cloudy", icon: "⛅" };
  if (code === 3) return { text: "Overcast", icon: "☁️" };
  if (code === 45 || code === 48) return { text: "Foggy", icon: "🌫️" };
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return { text: "Rain", icon: "🌧️" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { text: "Snow", icon: "❄️" };
  if ([95, 96, 99].includes(code)) return { text: "Thunderstorm", icon: "⛈️" };
  return { text: "Cloudy", icon: "☁️" };
}

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const loadingState = document.getElementById("loadingState");
const errorState = document.getElementById("errorState");
const errorMsg = document.getElementById("errorMsg");
const weatherResult = document.getElementById("weatherResult");

const cityNameEl = document.getElementById("cityName");
const weatherIconEl = document.getElementById("weatherIcon");
const temperatureEl = document.getElementById("temperature");
const conditionTextEl = document.getElementById("conditionText");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");
const cityChips = document.querySelectorAll(".city-chip");

async function fetchWeather(city) {
  loadingState.style.display = "block";
  errorState.style.display = "none";
  weatherResult.style.display = "none";

  try {
    // 1. Geocode city name using Open-Meteo Geocoding API
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
    const geoRes = await fetch(geoUrl);
    if (!geoRes.ok) throw new Error("Geocoding service unavailable.");

    const geoData = await geoRes.json();
    if (!geoData.results || geoData.results.length === 0) {
      throw new Error(`Could not find location "${city}". Please check spelling.`);
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    // 2. Fetch current weather from Open-Meteo Forecast API
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m`;
    const weatherRes = await fetch(weatherUrl);
    if (!weatherRes.ok) throw new Error("Weather forecast service unavailable.");

    const weatherData = await weatherRes.json();
    const current = weatherData.current;

    const weatherMeta = getWeatherMeta(current.weather_code);

    // 3. Render weather data
    cityNameEl.textContent = `${name}, ${country || ""}`;
    weatherIconEl.textContent = weatherMeta.icon;
    temperatureEl.textContent = Math.round(current.temperature_2m);
    conditionTextEl.textContent = weatherMeta.text;
    humidityEl.textContent = `${current.relative_humidity_2m}%`;
    windSpeedEl.textContent = `${current.wind_speed_10m} km/h`;

    loadingState.style.display = "none";
    weatherResult.style.display = "block";
  } catch (err) {
    loadingState.style.display = "none";
    errorMsg.textContent = err.message || "Failed to load weather data.";
    errorState.style.display = "block";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

cityChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    cityInput.value = chip.dataset.city;
    fetchWeather(chip.dataset.city);
  });
});

// Initial load for London
fetchWeather("London");
