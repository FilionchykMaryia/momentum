import { checkLang } from './language';

const lang = checkLang();

const linksBtn = document.querySelector('.links-btn');
const linksBlock = document.querySelector('.my-links__block');
linksBtn.addEventListener('click', () => {
  linksBlock.classList.toggle('block-hidden');
})

const linkTitle = document.querySelector('#new-link__title');
const linkSrc = document.querySelector('#new-link__src');
const linksList = document.querySelector('.links-list');

const setLink = () => {
  `<li><a href="https://www.google.by/">Google</a></li>`
  let li = document.createElement('li');
  li.innerHTML = `<a href="${linkSrc.value}">${linkTitle.value}</a>`;
  linksList.append(li);
  linkSrc.value = '';
  linkTitle.value = '';
}

linkSrc.addEventListener('change', setLink);
