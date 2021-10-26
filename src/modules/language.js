import { showDate } from './datetime';
import { getWeather } from './weather';
import { getQuotes } from './quotes.js';

const langBtnEn = document.querySelector('.en');
const langBtnRu = document.querySelector('.ru');
const titleLang = document.querySelector('.title-lang');
const titleImg = document.querySelector('.title-img');
const titleBlocks = document.querySelector('.title-blocks');

let lableTime = document.querySelector('.time-label');
let lableDate = document.querySelector('.date-label');
let lableGreeting = document.querySelector('.greeting-label');
let lableQuote = document.querySelector('.quote-label');
let lableWeather = document.querySelector('.weather-label');
let lableAudio = document.querySelector('.audio-label');

const linkTitle = document.querySelector('#new-link__title');
const linkSrc = document.querySelector('#new-link__src');

let lang;
export const getLangLocalStorage = () => {
  if(localStorage.getItem('lang')) lang = localStorage.getItem('lang');
  if(lang === 'en') langBtnEn.checked = true;
  if(lang === 'ru') langBtnRu.checked = true;
}
const setLangLocalStorage = () => {
  localStorage.setItem('lang', lang);
}

lang = getLangLocalStorage();

export const checkLang = () => {
  if(langBtnEn.checked) {
    lang = langBtnEn.value;
    titleLang.textContent = 'Language';
    titleImg.textContent = 'Image Source';
    titleBlocks.textContent = 'Visibility / hidden block';
    lableTime.textContent = 'Time';
    lableDate.textContent = 'Date';
    lableGreeting.textContent = 'Greeting';
    lableQuote.textContent = 'Quote';
    lableWeather.textContent = 'Weather';
    lableAudio.textContent = 'Audio';
    linkTitle.placeholder = '[Title]';
    linkSrc.placeholder = '[Source]';
  }
  if(langBtnRu.checked) {
    lang = langBtnRu.value;
    titleLang.textContent = 'Язык';
    titleImg.textContent = 'Источник фонового изображения';
    titleBlocks.textContent = 'Показать / скрыть блок';
    lableTime.textContent = 'Время';
    lableDate.textContent = 'Дата';
    lableGreeting.textContent = 'Приветствие';
    lableQuote.textContent = 'Цитата';
    lableWeather.textContent = 'Погода';
    lableAudio.textContent = 'Аудиоплеер';
    linkTitle.placeholder = '[Название]';
    linkSrc.placeholder = '[Ресурс]';
  };
  return lang;
}
export const toggleLang = () => {
  lang = checkLang();
  showDate(lang);
  getWeather(lang);
  getQuotes(lang);
  setLangLocalStorage();
  getLangLocalStorage();
  return lang;
}

langBtnEn.addEventListener('click', toggleLang)
langBtnRu.addEventListener('click', toggleLang)
window.addEventListener('beforeunload', setLangLocalStorage);
window.addEventListener('load', getLangLocalStorage);
