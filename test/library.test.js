const Library = require("../app/library");
const Book = require("../app/book");

test("Check that a library can be instantiated with some books", () => {
  const Book1 = new Book("Don't Make Me Think", "Steve Krug", 123)
  const Book2 = new Book("Site Reliability Engineering", "Niall Richard Murphy", 456)
  const Book3 = new Book("Fantasic Mr Fox", "Roald Dahl", 789)
  const library = new Library ([Book1, Book2, Book3]);
  expect(library.books).toEqual([Book1, Book2, Book3]);
});

test("Check that a book can be added to the library", () => {
  const Book1 = new Book("Don't Make Me Think", "Steve Krug", 123)
  const Book2 = new Book("Site Reliability Engineering", "Niall Richard Murphy", 456)
  const Book3 = new Book("Fantasic Mr Fox", "Roald Dahl", 789)
  const Book4 = new Book("The Bible", "Moses", 744)
  const library = new Library ([Book1, Book2, Book4]);
  library.addBook(Book3);
  expect(library.books).toEqual([Book1, Book2, Book4, Book3]);
});

test("Check that a book can be withdrawn from the library", () => {
  const Book1 = new Book("Don't Make Me Think", "Steve Krug", 123)
  const Book2 = new Book("Site Reliability Engineering", "Niall Richard Murphy", 456)
  const Book3 = new Book("Fantasic Mr Fox", "Roald Dahl", 789)
  const Book4 = new Book("The Bible", "Moses", 744)
  const library = new Library ([Book1, Book2, Book3, Book4]);
  library.withdrawBook(2, 2);
  expect(library.books).toEqual([Book1, Book2]);
});

test("Check that a book can be checked out from the library", () => {
  const Book1 = new Book("Don't Make Me Think", "Steve Krug", 123)
  const Book2 = new Book("Site Reliability Engineering", "Niall Richard Murphy", 456)
  const Book3 = new Book("Fantasic Mr Fox", "Roald Dahl", 789)
  const Book4 = new Book("The Bible", "Moses", 744)
  const library = new Library ([Book1, Book2, Book3, Book4]);
  library.checkoutBook(2, 1);
  expect(library.books).toEqual([Book1, Book2, Book4]);
});