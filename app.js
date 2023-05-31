// Get the elements from the DOM
const form = document.getElementById('form');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const bookList = document.querySelector('.books-of-list');

// Retrieve the books from localStorage or initialize an empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

