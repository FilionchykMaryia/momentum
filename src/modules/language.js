import { showDate } from './datetime';
import { getWeather } from './weather';
import { getQuotes } from './quotes.js';

const langBtnEn = document.querySelector('.en');
const langBtnRu = document.querySelector('.ru');

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
  if(langBtnEn.checked) lang = langBtnEn.value;
  if(langBtnRu.checked) lang = langBtnRu.value;
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
