const {takeBook,printBook} = require('./books')
const {printUser,takeUser} = require('./users')

printBook()
printUser()
console.log(takeBook(111));
console.log(takeUser(1234567));

const  book = takeBook(111)
const user = takeUser(1237654)
if(book.taked){
    console.log("the book is taked");
    console.log();
}
if(user.take){
    console.log("the user taked other book");
    console.log();
}
if(book.type != user.type ){
   console.log("the book's type doesnt match to the user's type");
   console.log();
}
if(book.type == user.type && !book.taked && !user.take){
    console.log("The loan was completed successfully.");
}