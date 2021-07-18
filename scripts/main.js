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
const pageNumberAlert = document.querySelector('#page-count-warning');
const coverUp = document.querySelector('#cover-up');

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBookToLibrary() {
    if (bookTitle.value === '' || authorName.value === '' || pageCount.value === '') {
        alert('Please fill each field before submitting.');
        return;
    }
    if (isNaN(pageCount.value) && pageCount.value !== null) {
        pageNumberAlert.style.display = 'block';
        pageCount.style.border = '2px solid red';
        return;
    }
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
    pageNumberAlert.style.display = 'none';
    pageCount.style.border = '';
    coverUp.style.display = 'none'
    
}

function displayUserInput() {
    userInput.style.display = 'flex';
    coverUp.style.display = 'block';

}
function hideUserInput() {
    userInput.style.display = 'none';
    clearUserInput();
}

submitButton.onclick = addBookToLibrary;
addBook.onclick = displayUserInput;
closeModal.onclick = hideUserInput;