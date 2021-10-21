import { getRandomNum } from "./slider-bg";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let data = {};

async function getQuotes() {  
  const quotes = '../data/data-en.json';
  const res = await fetch(quotes);
  data = await res.json(); 
  generateQuote(data);
  
}
getQuotes();

const generateQuote = (data) => {
  const randomNum = getRandomNum(0, data.length-1);
  author.textContent = data[randomNum].author;
  quote.textContent = `"${data[randomNum].text}"`;
}
changeQuote.addEventListener('click', () => {generateQuote(data)})