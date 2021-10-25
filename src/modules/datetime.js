import { showGreeting } from './greeting';
import { checkLang, toggleLang } from './language';

let lang = checkLang();
let locale;

const time = document.querySelector('.time');
const date = document.querySelector('.date');
 
const showTime = (lang) => {
  lang = checkLang();
  if(lang==='en'){locale = 'en-GB'};
  if(lang==='ru'){locale = 'ru-RU'};
  const newDate = new Date();
  const currentTime = newDate.toLocaleTimeString();
  time.textContent = currentTime;
  showDate(locale);
  showGreeting(lang);
  setTimeout(showTime, 1000);
}
export const showDate = (locale = 'en-GB') => {
  const newDate = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
  const currentDate = newDate.toLocaleDateString(`${locale}`, options);
  date.textContent = currentDate; 
}
showTime(lang);
