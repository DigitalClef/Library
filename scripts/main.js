let myLibrary = [];
const libraryBox = document.querySelector('.library-box');
const submitButton = document.querySelector('#submit-button');
const bookTitle = document.querySelector('#book-title');
const authorName = document.querySelector('#author');
const pages = document.querySelector('#page-count');
const bookFinished = document.querySelector('#finished-book');
const addBook = document.querySelector('#add-book');
const userInput = document.querySelector('#user-input');
const closeModal = document.querySelector('#close-modal');
const pageNumberAlert = document.querySelector('#page-count-warning');
const coverUp = document.querySelector('#cover-up');
let bookcard = '';
let removeBook = '';

function Book(title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
}

function addBookToLibrary() {
    let readString;
    if (bookTitle.value === '' || authorName.value === '' || pages.value === '') {
        alert('Please fill each field before submitting.');
        return;
    }
    if (isNaN(pages.value) || pages.value < 0) {
        pageNumberAlert.style.display = 'inline';
        pages.style.border = '2px solid red';
        return;
    }
    if (bookFinished.checked) {
        readString = 'yes';
    }
    else {
        readString = 'no';
    }

    const book1 = new Book(bookTitle.value, authorName.value, pages.value, readString);
    myLibrary.push(book1);
    hideUserInput();
    updateLibrary(myLibrary[myLibrary.length-1]);
}

//clears every input field on the userInput modal div
function clearUserInput() {
    bookTitle.value = '';
    authorName.value = '';
    pages.value = '';
    bookFinished.checked = false;
    pageNumberAlert.style.display = 'none';
    pages.style.border = '';
    coverUp.style.display = 'none'
}

function displayUserInput() {

    userInput.style.display = 'flex';
    userInput.classList.remove('modal-animation-reverse');
    userInput.classList.add('modal-animation');
    coverUp.style.display = 'block';
}

function hideUserInput() {
    userInput.classList.remove('modal-animation');
    userInput.classList.add('modal-animation-reverse');
    clearUserInput();
}

function updateLibrary(book) {
    bookcard = document.createElement('div');
    bookcard.classList.add('new-book');
    for (let property in book) {
        let bookcardInfo = document.createElement('div');
        bookcardInfo.innerText = `${property}: ${book[property]}`
        bookcard.appendChild(bookcardInfo);
    }
    libraryBox.appendChild(bookcard);
}

submitButton.onclick = addBookToLibrary;
addBook.onclick = displayUserInput;
closeModal.onclick = hideUserInput;
