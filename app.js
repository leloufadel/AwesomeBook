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
const awesomeBooksSection = document.querySelector('.show-books');
const addNewSection = document.querySelector('.add-newbook');
const contactInfo = document.querySelector('.contact-info');
listButton.addEventListener('click', () => {
  awesomeBooksSection.classList.add('show');
  addNewSection.classList.add('hide');
  contactInfo.classList.add('hide');
});
addNewButton.addEventListener('click', () => {
  addNewSection.classList.remove('hide');
  awesomeBooksSection.classList.remove('show');
  contactInfo.classList.add('hide');
});
contactButton.addEventListener('click', () => {
  contactInfo.classList.remove('hide');
  awesomeBooksSection.classList.remove('show');
  addNewSection.classList.add('hide');
});
