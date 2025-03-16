class User{
    id
    name
    type
    take
    constructor(id,name,type,take){
        this.id=id
        this.name=name
        this.type=type
        this.take=take
    }
}
const arrUsers=[new User(123,"a","regesh",false),new User(111,"b","metach",true),new User(555,"c","dat",false),new User(777,"d","regesh",true)]
function printUser() {
    for (const user of arrUsers) {
        console.log(user.id+" "+user.name+" "+user.type+" "+user.take)
    }
}
function takeUser(user) {
    for (const u of arrUsers) {
        if(u.id==user){
            return u
        }
    }
    throw new Error("invalid user")
}
module.exports={printUser,takeUser}