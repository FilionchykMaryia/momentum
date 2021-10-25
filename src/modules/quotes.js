import { getRandomNum } from "./slider-bg";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let data = {};
let lang = 'en';
if(localStorage.getItem('lang')) lang = localStorage.getItem('lang');

export async function getQuotes(lang) { 
  const quotes = `../data/data-${lang}.json`;
  const res = await fetch(quotes);
  data = await res.json(); 
  generateQuote(data);
  
}
getQuotes(lang);

const generateQuote = (data) => {
  const randomNum = getRandomNum(0, data.length-1);
  author.textContent = data[randomNum].author;
  quote.textContent = `"${data[randomNum].text}"`;
}
changeQuote.addEventListener('click', () => {generateQuote(data)})