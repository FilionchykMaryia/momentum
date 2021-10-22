`https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=1a2b4c1e18adc3452d9afc9f025ceba6&units=metric`

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const inpCity = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const key = '1a2b4c1e18adc3452d9afc9f025ceba6';
let city = inpCity.value;
const lang = 'lang=en';
const units = 'units=metric';

const setLocalStorage = () => {
  localStorage.setItem('city', inpCity.value);
}

const getLocalStorage = () => {
  if(localStorage.getItem('city')) inpCity.value = localStorage.getItem('city');
}

async function getWeather(){
  
  city = inpCity.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&${lang}&appid=${key}&${units}`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
  humidity.textContent = `Humidity: ${data.main.humidity} %`;
  setLocalStorage();
}
getLocalStorage();
getWeather();


inpCity.addEventListener('change', getWeather)
