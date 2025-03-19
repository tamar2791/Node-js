class Book {
    code
    name
    type
    taked
    constructor(code, name, type, taked) {
        this.code = code
        this.name = name
        this.type = type
        this.taked = taked
    }
}
const arrBooks = [new Book(1, "aaa", "drama", false), new Book(2, "bbb", "dat", true), new Book(3, "ccc", "metach", true), new Book(4, "ddd", "regesh", false)]

const fs = require('fs')
function initBook() {
    const jsonData = JSON.stringify(arrBooks, null, 2);
    fs.writeFileSync("books.json", jsonData, "utf8");
}

function printBook() {
    const rawData = fs.readFileSync("books.json", "utf8");
    const books = JSON.parse(rawData);
    const arrBook = books.map(b => new Book(b.code, b.name, b.type, b.taked));

    for (const book of arrBook) {
        console.log(book.code + " " + book.name + " " + book.type + " " + book.taked)
    }
}
function takeBook(code) {
    const rawData = fs.readFileSync("books.json", "utf8");
    const books = JSON.parse(rawData);
    const arrBook = books.map(b => new Book(b.code, b.name, b.type, b.taked));

    for (const book of arrBook) {
        if (book.code == code) {
            return book
        }
    }
    throw new Error("this code doesn't exist")
}
module.exports = { initBook, printBook, takeBook }