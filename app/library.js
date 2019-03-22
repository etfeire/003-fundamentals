class Library {
  constructor(books) {
    this.books = books;
  } 
  addBook(name) {
     this.books.push(name);
  }
  withdrawBook(index, num) {
    this.books.splice(index, num);
  }
  checkoutBook(index, num) {
    this.books.this.available(index, num)= false;
  }
}

module.exports = Library;

//to find index of a specific element var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var a = fruits.indexOf("Apple");
