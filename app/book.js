class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.available = true;
        this.ISBN = ISBN;
    }
}

module.exports = Book;