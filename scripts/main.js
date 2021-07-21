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
    let newBook = document.createElement('div');
    newBook.classList.add('new-book');
    let lastObject = myLibrary[myLibrary.length-1];
    removeBook = document.createElement('span');
    removeBook.innerHTML = '&#10005';
    removeBook.classList.add('close');
    newBook.appendChild(removeBook);
    for (let key in lastObject) {
        let bookInfo = document.createElement('p');
        bookInfo.innerText = `${key}: ${lastObject[key]}`;
        newBook.appendChild(bookInfo);
    };
    libraryBox.appendChild(newBook);
}

submitButton.onclick = addBookToLibrary;
addBook.onclick = displayUserInput;
closeModal.onclick = hideUserInput;