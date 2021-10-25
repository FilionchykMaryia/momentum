const blockTime = document.querySelector('#Time');
const blockDate = document.querySelector('#Date');
const blockGreeting = document.querySelector('#Greeting');
const blockQuote = document.querySelector('#Quote');
const blockWeather = document.querySelector('#Weather');
const blockAudio = document.querySelector('#Audio');
const blocks = document.querySelectorAll('.checkbox');

const timeB = document.querySelector('.time');
const dateB = document.querySelector('.date');
const greetingB = document.querySelector('.greeting-container');
const quoteB = document.querySelector('.quote-text');
const weatherB = document.querySelector('.weather');
const playerB = document.querySelector('.player');

const settingsBtn = document.querySelector('.settings-btn');
const settingsBlock = document.querySelector('.settings-list');
settingsBtn.addEventListener('click', () => {
  settingsBlock.classList.toggle('block-hidden');
})

const getItems = () => {
  blockTime.checked = localStorage.getItem('time');
  blockDate.checked = localStorage.getItem('date');
  blockGreeting.checked = localStorage.getItem('greeting');
  blockQuote.checked = localStorage.getItem('quote');
  blockWeather.checked = localStorage.getItem('weather');
  blockAudio.checked = localStorage.getItem('player');
}
// getItems();
const hiddenBlock = () => {
  if(blockTime.checked) {
    timeB.classList.add('block-hidden');
    localStorage.setItem('time', true);
  } else {
    timeB.classList.remove('block-hidden');
    localStorage.setItem('time', false);
  }
  if(blockDate.checked) {
    dateB.classList.add('block-hidden');
    localStorage.setItem('date', true);
  } else {
    dateB.classList.remove('block-hidden');
    localStorage.setItem('date', false);
  }
  if(blockGreeting.checked) {
    greetingB.classList.add('block-hidden');
    localStorage.setItem('greeting', true);
  } else {
    greetingB.classList.remove('block-hidden');
    localStorage.setItem('greeting', false);
  }
  if(blockQuote.checked) {
    quoteB.classList.add('block-hidden');
    localStorage.setItem('quote', true);
  } else {
    quoteB.classList.remove('block-hidden');
    localStorage.setItem('quote', false);
  }
  if(blockWeather.checked) {
    weatherB.classList.add('block-hidden');
    localStorage.setItem('weather', true);
  } else {
    weatherB.classList.remove('block-hidden');
    localStorage.setItem('weather', false);
  }
  if(blockAudio.checked) {
    playerB.classList.add('block-hidden');
    localStorage.setItem('player', true);
  } else {
    playerB.classList.remove('block-hidden');
    localStorage.setItem('player', false);
  }
}
blocks.forEach(block => {
  block.addEventListener('click', hiddenBlock)
});
// window.addEventListener('load', getItems);