import { checkLang } from './language';
import { setBg, getLinkToImage } from './slider-bg';

const lang = checkLang();

const greeting = document.querySelector('.greeting');
const inpName = document.querySelector('.name');

const getHours = () => {
  const date = new Date();
  const hours = date.getHours();
  return hours;
}
export const getTimeOfDay = () => {
  let hours = getHours();
    if (hours>= 6 && hours<=11) {
      return 'morning'
    } else if (hours>=12 && hours<=17){
      return 'day'
    } else if (hours>=18 && hours<=23){
      return 'evening'
    } else if (hours>=0 && hours<=5){
      return 'night'
    }
}
getLinkToImage();

const getGreeting = (lang = 'en') => {
  const timeOfDay = getTimeOfDay();
  if(lang==='en'){
    switch(timeOfDay) {
      case 'morning':
        return 'Good morning, '
      case 'day':
        return 'Good day, ' 
      case 'evening':
        return 'Good evening, '
      case 'night':
        return 'Good night, ' 
    }
  }
  if(lang==='ru'){
    switch(timeOfDay) {
      case 'morning':
        return 'Доброе утро, '
      case 'day':
        return 'Добрый день, ' 
      case 'evening':
        return 'Добрый вечер, '
      case 'night':
        return 'Доброй ночи, ' 
    }
  }
}

export const showGreeting = (lang) => {
  const phrase = getGreeting(lang);
  if(lang==='en'){
    greeting.textContent = phrase;
    inpName.placeholder = `[Enter name]`;
  }
  if(lang==='ru'){
    greeting.textContent = phrase;
    inpName.placeholder = `[Введите имя]`;
  }
}

const setNameLocalStorage = () => {
  localStorage.setItem('name', inpName.value);
}

const getNameLocalStorage = () => {
  if(localStorage.getItem('name')) inpName.value = localStorage.getItem('name');
}

window.addEventListener('beforeunload', setNameLocalStorage);
window.addEventListener('load', getNameLocalStorage);
