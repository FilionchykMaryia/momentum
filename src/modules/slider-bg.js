import {getTimeOfDay} from './greeting';
// import {checkSrc} from './settings-img';

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const unsplashKey = `B0p17SNfww6H_O7lz-9LEWn3jd1lhzsFuog3R-KQliU`;
const flickrKey = `f4f6c913d1fd25f396c79103637917e7`;
const query = document.querySelector('.img-query');
const gitHub = document.querySelector('#GitHub');
const unsplash = document.querySelector('#Unsplash');
const flickr = document.querySelector('#Flickr');

let src;

export const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
let randomNum = getRandomNum(1, 20);

export const getSrcLocalStorage = () => {
  if(localStorage.getItem('src')) src = localStorage.getItem('src');
  if(src === 'GitHub') gitHub.checked = true;
  if(src === 'Unsplash') unsplash.checked = true;
  if(src === 'Flickr') flickr.checked = true;
}
const setSrcLocalStorage = () => {
  localStorage.setItem('src', src);
}

src = getSrcLocalStorage();

export const checkSrc = () => {
  if(gitHub.checked) src = gitHub.value;
  if(unsplash.checked) src = unsplash.value;
  if(flickr.checked) src = flickr.value;
  setSrcLocalStorage();
  return src;
}

export const setBg = () => {
  const img = new Image();
  const timeOfDay = getTimeOfDay();
  const bgNum = randomNum.toString().padStart(2, '0');
  img.src = `https://github.com/FilionchykMaryia/stage1-tasks/blob/assets/images/${timeOfDay}/${bgNum}.jpg?raw=true`;
  img.onload = () => {
    document.body.style.backgroundImage = `url(${img.src})`;
  }
}
// setBg();
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

export async function getLinkToImage() {
  // src = getSrcLocalStorage();
  let srcAPI = checkSrc();
  if(srcAPI === 'GitHub') {
    setBg();
  }  
  if(srcAPI === 'Unsplash') {
    const img = new Image();
    let url = `https://api.unsplash.com/photos/random?query=space&client_id=${unsplashKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.urls.regular);
    img.src = data.urls.regular;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${img.src})`;
    }
  }
  if(srcAPI === 'Flickr') {
    const img = new Image();
    let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=nature&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    let index = getRandomNum(0, 100);
    console.log(data.photos.photo[index].url_l);
    img.src = data.photos.photo[index].url_l;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${img.src})`;
    }
  }

 }

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
// document.addEventListener('load', setBg)
gitHub.addEventListener('click', getLinkToImage);
unsplash.addEventListener('click', getLinkToImage);
flickr.addEventListener('click', getLinkToImage);
window.addEventListener('beforeunload', setSrcLocalStorage);
window.addEventListener('load', getSrcLocalStorage);