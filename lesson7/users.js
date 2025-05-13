class User{
    id
    name
    password
    constructor(id,name,password){
        this.id=id
        this.name=name
        this.password=password
    }
}
let arrUsers=[new User(1,"aaa","1234"),new User(2,"bbb","1234"),new User(3,"ccc","1234"),new User(4,"ddd","1234")]
module.exports={arrUsers}