class Book{
    code
    name
    type
    taked
    constructor(code,name,type,taked){
        this.code=code
        this.name=name
        this.type=type
        this.taked=taked
    }
}
const arrBooks=[new Book(1,"aaa","drama",false),new Book(2,"bbb","dat",true),new Book(3,"ccc","metach",true),new Book(4,"ddd","regesh",false)]
function printBook() {
    for (const book of arrBooks) {
        console.log(book.code+" "+book.name+" "+book.type+" "+book.taked)
    }
}
function takeBook(code) {
    for (const book of arrBooks) {
        if(book.code==code){
            return book
        }
    }
    throw new Error("this code doesn't exist")
}
module.exports={printBook,takeBook}