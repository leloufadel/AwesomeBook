// import BooksCollection from './Modules/functions.js';
// import { DateTime } from './node_modules/luxon/src/luxon.js';

if (localStorage.getItem('Added Books') == null) {
  localStorage.setItem('Added Books', JSON.stringify([]));
}
const booksCollection = new BooksCollection();
booksCollection.init();
booksCollection.displayBooks();

const list = document.querySelector('.books-of-list');
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    booksCollection.removeBook(Number(e.target.id));
  }
});
const listButton = document.querySelector('.booklist');
const addNewButton = document.querySelector('.addition');
const contactButton = document.querySelector('.contact');
const awesomeBooks = document.querySelector('.show-books');
const addNewSection = document.querySelector('.add-newbook');
const contactInformation = document.querySelector('.contact-info');
listButton.addEventListener('click', () => {
  awesomeBooks.classList.add('show');
  addNewSection.classList.add('hide');
  contactInformation.classList.add('hide');
});
addNewButton.addEventListener('click', () => {
  addNewSection.classList.remove('hide');
  awesomeBooks.classList.remove('show');
  contactInformation.classList.add('hide');
});
contactButton.addEventListener('click', () => {
  contactInformation.classList.remove('hide');
  awesomeBooks.classList.remove('show');
  addNewSection.classList.add('hide');
});

function startTime() {
  // /* eslint-disable */
  // //const { DateTime } = luxon;

  // /* eslint-enable */
  // // const time = DateTime.now().setZone('Europe/Paris');
  // // const now = time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

  //document.getElementById('time').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  // setTimeout(startTime, 1000);
}

startTime();
