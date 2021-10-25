`https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=1a2b4c1e18adc3452d9afc9f025ceba6&units=metric`

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const inpCity = document.querySelector('.city');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');

const key = '1a2b4c1e18adc3452d9afc9f025ceba6';
let city = inpCity.value;
let lang;

let locale = 'lang=en';
const units = 'units=metric';

const setLocalStorage = () => {
  localStorage.setItem('city', inpCity.value);
}

const getLocalStorage = () => {
  if(localStorage.getItem('city')) inpCity.value = localStorage.getItem('city');
  if(localStorage.getItem('lang')) lang = localStorage.getItem('lang');
}

export async function getWeather(lang = 'en'){
  locale = `lang=${lang}`;
  city = inpCity.value;
  if(lang==='en') inpCity.placeholder = `[Enter city]`;
  if(lang==='ru') inpCity.placeholder = `[Введите город]`;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&${locale}&appid=${key}&${units}`;
  const res = await fetch(url);
  const data = await res.json();
  try{
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherError.style.display = 'none';
    if(lang === 'en') {
      wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
      humidity.textContent = `Humidity: ${data.main.humidity} %`;
    }
    if(lang === 'ru') {
      wind.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} м/с`;
      humidity.textContent = `Относительная влажность: ${data.main.humidity} %`;
    }
    
    setLocalStorage();
  } catch(err){
    if(err instanceof TypeError){
      weatherError.textContent = data.message;
      weatherError.style.display = 'block';
      temperature.textContent = '';
      weatherDescription.textContent = '';
      wind.textContent = '';
      humidity.textContent = '';
    }
  }
  
}
getLocalStorage();
getWeather(lang);


inpCity.addEventListener('change', getWeather)
