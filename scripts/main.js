let myLibrary = [];
const libraryBox = document.querySelector('.library-box');
const submitButton = document.querySelector('#submit-button');
const bookTitle = document.querySelector('#book-title');
const authorName = document.querySelector('#author');
const pageCount = document.querySelector('#page-count');
const bookFinished = document.getElementsByName('read');

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
}

function addBookToLibrary() {
    const book1 = new Book('Harry Potter', 'J.K. Rowling', 320, true);
    myLibrary.push(book1);
}

addBookToLibrary();

submitButton.onclick = function() {
    bookFinished.forEach(choice => {
        if (choice.checked) {
            console.log(choice.value);
        }
    });
}


