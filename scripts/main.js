let myLibrary = [];
const libraryBox = document.querySelector('.library-box');

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
console.log(myLibrary);
