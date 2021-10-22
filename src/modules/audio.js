import playList from './playList.js';

let isPlay = false;
let playNum = 0;
const allTracks = playList.length-1;
let autoPlay;

const audio = new Audio();

const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.play-prev');
const nextBtn = document.querySelector('.play-next');
const volumeBtn = document.querySelector('.volume-button');
const playListContainer = document.querySelector('.play-list');
const titleMusic = document.querySelector('.title-music');
const timeline = document.querySelector('.timeline');
const volumeSlider = document.querySelector('.volume-slider');
const volumePercentage = document.querySelector('.volume-percentage');

playList.forEach((el) => {
  const li = document.createElement('li');
  li.textContent = el.title;
  li.classList.add('play-item');
  playListContainer.append(li);
})

const list = document.querySelectorAll('.play-item');

const handlePlay = () => {
  !isPlay ? play() : pause(); 
}

const play = () => {
  //audio.currentTime = 0;
  audio.src = playList[playNum].src;
  audio.play();
  isPlay = true;
  playBtn.classList.add('pause');
  list[playNum].classList.add('item-active'); 
  titleMusic.textContent = playList[playNum].title;
  autoPlay = setInterval(() => {
    if(audio.ended) playNext();
    }, 2000);
}

const pause = () => {
  audio.pause();
  isPlay = false;
  playBtn.classList.remove('pause');
  clearInterval(autoPlay);
}

const playNext = () => { 
  list[playNum].classList.remove('item-active');
  (playNum < allTracks) ? playNum+=1 : playNum = 0;
  audio.src = playList[playNum].src;
  play();
}

const playPrev = () => {
  list[playNum].classList.remove('item-active');
  (playNum > 0) ? playNum-=1 : playNum = allTracks;
  audio.src = playList[playNum].src;
  play();
}

const handleVolume = () => {
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeBtn.classList.remove('medium');
    volumeBtn.classList.add('mute');
  } else {
    volumeBtn.classList.add('medium');
    volumeBtn.classList.remove('mute');
  }
}

function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

playBtn.addEventListener('click', handlePlay);
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);
volumeBtn.addEventListener('click', handleVolume);

audio.addEventListener('loadeddata', () => {
    console.log(playList[playNum].duration);
    document.querySelector('.length').textContent = playList[playNum].duration;
    audio.volume = .75;
  }, false
);

timeline.addEventListener('click', e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

setInterval(() => {
  const progressBar = document.querySelector('.progress');
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  document.querySelector('.current').textContent = getTimeCodeFromNum(audio.currentTime);
}, 500);

volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  volumePercentage.style.width = newVolume * 100 + '%';
}, false)


