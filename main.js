var myInfo = {
    name: "Qlap",
    id: 22162019,
    age: 20,
    address: "HCM City",
    getId: function () {
        return String(this.id)
    }
};
myInfo.email = "uchihaquoc04@gmail.com"
myInfo["my-family"] = "three members"
console.log(typeof myInfo.getId())