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
  //to find index of a specific element var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var a = fruits.indexOf("Apple");

  checkoutBook(index) {
    this.books[index].available= false;
  }
}

module.exports = Library;


