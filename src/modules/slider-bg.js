import {getTimeOfDay} from './greeting';

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

export const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}

let randomNum = getRandomNum(1, 20);

const setBg = () => {
  const img = new Image();
  const timeOfDay = getTimeOfDay();
  const bgNum = randomNum.toString().padStart(2, '0');
  img.src = `https://github.com/FilionchykMaryia/stage1-tasks/blob/assets/images/${timeOfDay}/${bgNum}.jpg?raw=true`;
  // document.body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${img.src})`;
  }
}
setBg();
const getSlideNext = () => {
  if(randomNum < 20) {
    randomNum++;
  } else if (randomNum === 20){
    randomNum = 1;
  }
  setBg();
}
const getSlidePrev = () => {
  if(randomNum > 1) {
    randomNum--;
  } else if (randomNum === 1){
    randomNum = 20;
  }
  setBg();
}
slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
