let myLibrary = [];
const libraryBox = document.querySelector('.library-box');
const submitButton = document.querySelector('#submit-button');
const bookTitle = document.querySelector('#book-title');
const authorName = document.querySelector('#author');
const pageCount = document.querySelector('#page-count');
const bookFinished = document.querySelector('#finished-book');
const addBook = document.querySelector('#add-book');
const userInput = document.querySelector('.user-input');
const closeModal = document.querySelector('#close');


function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBookToLibrary() {
    const book1 = new Book(bookTitle.value, authorName.value, pageCount.value, bookFinished.checked);
    myLibrary.push(book1);
    hideUserInput();
    console.log(myLibrary);
}

//clears every input field on the userInput modal div
function clearUserInput() {
    bookTitle.value = '';
    authorName.value = '';
    pageCount.value = '';
    bookFinished.checked = false;
}

function displayUserInput() {
    userInput.style.display = 'flex';
}
function hideUserInput() {
    userInput.style.display = 'none';
    clearUserInput();
}

submitButton.onclick = addBookToLibrary;
addBook.onclick = displayUserInput;
closeModal.onclick = hideUserInput;