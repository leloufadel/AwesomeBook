if (localStorage.getItem('Added Books') == null) {
  localStorage.setItem('Added Books', JSON.stringify([]));
}

class BooksCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('Added Books'));
  }

  updatelocalStorage() {
    localStorage.setItem('Added Books', JSON.stringify(this.books));
  }

  /* eslint-disable class-methods-use-this */
  createBooks(arr) {
    let books = '';
    for (let i = 0; i < arr.length; i += 1) {
      arr[i].id = i;
      books += `<div class="book-line"><p>"${arr[i].title}"</p>
      <p>${arr[i].author}</p>
      <button class="remove" onclick="booksCollection.removeBook(${i})">Remove</button>
      </div>`;
    }
    return books;
  }

  /* eslint-enable class-methods-use-this */
  displayBooks() {
    const container = document.querySelector('.books-of-list');
    container.innerHTML = this.createBooks(this.books);
  }

  addNewBook(title, author) {
    const id = this.books.length;
    const book = {
      id,
      title,
      author,
    };
    this.books.push(book);
    this.updatelocalStorage();
    this.displayBooks();
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }

  removeBook(id) {
    this.books = this.books.filter((el) => el.id !== id);
    this.updatelocalStorage();
    this.displayBooks();
  }

  init() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
      const title = document.querySelector('.title');
      const author = document.querySelector('.author');
      e.preventDefault();
      this.addNewBook(title.value, author.value);
    });
  }
}

const booksCollection = new BooksCollection();

booksCollection.init();
booksCollection.displayBooks();

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
  /* eslint-disable */
  const { DateTime } = luxon;
  /* eslint-enable */
  const time = DateTime.now().setZone('Europe/Paris');
  const now = time.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

  document.getElementById('time').innerHTML = now;
  setTimeout(startTime, 1000);
}

startTime();
