const showGreeting = () => {
  const greeting = document.querySelector('.greeting');
  const inpName = document.querySelector('.name');

  const getHours = () => {
    const date = new Date();
    const hours = date.getHours();
    return hours;
  }
  const getTimeOfDay = () => {
    let hours = getHours();
    if (hours>= 4 && hours<=11) {
      return 'Morning'
    } else if (hours>=12 && hours<=16){
      return 'Day'
    } else if (hours>=17 && hours<=23){
      return 'Evening'
    } else if (hours>=0 && hours<=3){
      return 'Night'
    }
  }
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}, `;
  greeting.textContent = greetingText;

  function setLocalStorage() {
    localStorage.setItem('name', inpName.value);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      inpName.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage);

}

export default showGreeting;