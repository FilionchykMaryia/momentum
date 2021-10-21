import { showGreeting } from './greeting';

const time = document.querySelector('.time');
const date = document.querySelector('.date');

const showTime = () => {
  const newDate = new Date();
  const currentTime = newDate.toLocaleTimeString();
  time.textContent = currentTime;
  showDate();
  showGreeting();
  setTimeout(showTime, 1000);
}
const showDate = () => {
  const newDate = new Date();
  const options = {weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC'};
  const currentDate = newDate.toLocaleDateString('en-GB', options);
  date.textContent = currentDate;
}
showTime();
