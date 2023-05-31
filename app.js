// Get the elements from the DOM
const form = document.getElementById('form');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const bookList = document.querySelector('.books-of-list');

// Retrieve the books from localStorage or initialize an empty array
let books = JSON.parse(localStorage.getItem('books')) || [];

// Function to display all books in the collection
function displayBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
      const listItem = document.createElement('p');
      listItem.textContent = `${book.title} - ${book.author}`;
    
      // Create a remove button for each book
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove');
  
      // Add an event listener to remove the book when the remove button is clicked
      removeButton.addEventListener('click', () => {
        removeBook(index);
      });
      listItem.appendChild(removeButton);
      bookList.appendChild(listItem);
    });
  }
  
  