// var myInfo = {
//     name: "Qlap",
//     id: 22162019,
//     age: 20,
//     address: "HCM City",
//     getId: function () {
//         return String(this.id)
//     }
// };
// myInfo.email = "uchihaquoc04@gmail.com"
// myInfo["my-family"] = "three members"
// console.log(typeof myInfo.getId())


function User(id, name, role, avatar) {
    this.id = id
    this.name = name
    this.role = role
    this.avatar = avatar
    this.getName = function () {
        return `${this.name} ${this.id}`
    }
}


User.prototype.companyName = "Google"
var author = new User(1, "QLap", "Husband", "Avatar")
author.title = "Share public"

console.log(author.companyName)


var date = new Date()
//date.getDate()
console.log(date.getFullYear())



var upgrade = Math.floor(Math.random() * 10)

if (upgrade < 5) {
    alert("Upgrade completefully")
}