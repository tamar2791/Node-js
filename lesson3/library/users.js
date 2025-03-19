class User {
    id
    name
    type
    take
    constructor(id, name, type, take) {
        this.id = id
        this.name = name
        this.type = type
        this.take = take
    }
}
const arrUsers = [new User(123, "a", "regesh", false), new User(111, "b", "metach", true), new User(555, "c", "dat", false), new User(777, "d", "regesh", true)]

const fs = require('fs')
async function initUser() {
    const jsonData = JSON.stringify(arrUsers, null, 2);
    await fs.promises.writeFile('users.json', jsonData, 'utf8')
}
function printUser() {
    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        const users = JSON.parse(data);
        for (const user of users) {
            console.log(user.id + " " + user.name + " " + user.type + " " + user.take)
        }
    })
}
async function takeUser(user) {
    const data = await fs.promises.readFile('user.json', 'utf8');
    const users = JSON.parse(data);
    const user1 = users.find(u => u.id === user)
    if (user1) {
        return user1
    }
    throw new Error("invalid user")
}
const xlsx = require('xlsx')
function writeXlsxU() {
    const ws = xlsx.utils.json_to_sheet(arrUsers)
    const wb = xlsx.utils.book_new()
    xlsx.utils.book_append_sheet(wb, ws, 'users')
    xlsx.writeFile(wb, 'users.xlsx')
}
function readXlsx() {
    const wb = xlsx.readFile('users.xlsx')
    const ws = wb.Sheets['users']
    const users = xlsx.utils.sheet_to_json(ws)
    return users
}
function findUser(id) {
    const users = readXlsx()
    for (const u of users) {
        if (u.id == id) {
            return u
        }
    }
    return 'not found'
}
module.exports = { initUser, printUser, takeUser, writeXlsxU, findUser }