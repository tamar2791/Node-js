import { initBook, printBook, takeBook, writeXlsxB, findBook } from './books.js'
import { initUser, printUser, takeUser, writeXlsxU, findUser } from './users.js'

// initBook()
// initUser()

// printBook()
// printUser()

// console.log(takeBook(1));
// console.log(takeUser(123));

// const args = process.argv.slice(2);

// const book = takeBook(args[0])
// const user = takeUser(args[1])
// if (book.taked) {
//     console.log("the book is taked");
//     console.log();
// }
// if (user.take) {
//     console.log("the user taked other book");
//     console.log();
// }
// if (book.type != user.type) {
//     console.log("the book's type doesnt match to the user's type");
//     console.log();
// }
// if (book.type == user.type && !book.taked && !user.take) {
//     console.log("The loan was completed successfully.");
// }


writeXlsxB()
writeXlsxU()

const args = process.argv.slice(2);
console.log(findBook(args[0]));
console.log(findUser(args[1]));