class Book{
    id
    name
    type
    taked
    constructor(id,name,type,taked){
        this.id=id
        this.name=name
        this.type=type
        this.taked=taked
    }
}
let arrBooks=[new Book(1,"aaa","drama",false),new Book(2,"bbb","dat",true),new Book(3,"ccc","metach",true),new Book(4,"ddd","regesh",false)]
module.exports={arrBooks}