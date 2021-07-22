let myLibrary = [];
const libraryBox = document.querySelector('.library-box');
const submitButton = document.querySelector('#submit-button');
const bookTitle = document.querySelector('#book-title');
const authorName = document.querySelector('#author');
const pages = document.querySelector('#page-count');
const bookFinished = document.querySelector('#finished-book');
const addBook = document.querySelector('#add-book');
const userInput = document.querySelector('.user-input');
const closeModal = document.querySelector('#close-modal');
const pageNumberAlert = document.querySelector('#page-count-warning');
const coverUp = document.querySelector('#cover-up');
let newBook = '';
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
    if ((isNaN(pages.value) && pages.value !== null) || pages.value < 0) {
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
    updateLibrary();
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
    coverUp.style.display = 'block';

}
function hideUserInput() {
    userInput.style.display = 'none';
    clearUserInput();
}

function updateLibrary() {
    clearLibrary();
    for (let i = 0; i < myLibrary.length; i++) {
        newBook = document.createElement('div');
        newBook.classList.add('new-book');
        newBook.setAttribute('data-book', `${i}`);
        removeBook = document.createElement('span');
        removeBook.innerHTML = '&#10005';
        removeBook.classList.add('close');
        removeBook.setAttribute('data-close', `${i}`);
        newBook.appendChild(removeBook);
        for (let key in myLibrary[i]) {
            let bookInfo = document.createElement('p');
            bookInfo.innerText = `${key}: ${myLibrary[i][key]}`;
            newBook.appendChild(bookInfo);
        }
        libraryBox.appendChild(newBook);
    }
    document.querySelectorAll('[data-book]').forEach( closeBook => {
        closeBook.onclick = function() {
            console.log(this.remove());
        }
    });
}

function clearLibrary() {
    while (newBook.firstChild) {
        newBook.removeChild(newBook.firstChild);
    }

    while (libraryBox.firstChild) {
        libraryBox.removeChild(libraryBox.firstChild);
    }
}

submitButton.onclick = addBookToLibrary;
addBook.onclick = displayUserInput;
closeModal.onclick = hideUserInput;
