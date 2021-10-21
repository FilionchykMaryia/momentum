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

export const showGreeting = () => {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}, `;
  greeting.textContent = greetingText;
}

const setLocalStorage = () => {
  localStorage.setItem('name', inpName.value);
}

const getLocalStorage = () => {
  if(localStorage.getItem('name')) inpName.value = localStorage.getItem('name');
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);
