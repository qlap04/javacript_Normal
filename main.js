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


// function User(id, name, role, avatar) {
//     this.id = id
//     this.name = name
//     this.role = role
//     this.avatar = avatar
//     this.getName = function () {
//         return `${this.name} ${this.id}`
//     }
// }


// User.prototype.companyName = "Google"
// var author = new User(1, "QLap", "Husband", "Avatar")
// author.title = "Share public"

// console.log(author.companyName)


// var date = new Date()
// //date.getDate()
// console.log(date.getFullYear())



// var upgrade = Math.floor(Math.random() * 10)

// if (upgrade < 5) {
//     alert("Upgrade completefully")
// }



// var date = Math.floor(Math.random() * 7)
// switch (date) {
//     case 2:
//         console.log("Today is Monday")
//         break
//     case 3:
//         console.log("Today is Tuesday")
//         break
//     case 4:
//         console.log("Today is 4")
//         break
//     case 5:
//         console.log("Today is 5")
//         break
//     case 6:
//         console.log("Today is 6")
//         break
//     case 7:
//         console.log("Today is 7")
//         break
//     default:
//         console.log("None")
// }



//Toan tu 3 ngoi
// var light = {
//     switch: "turnOn",
//     color: "white"
// }

// var result = light.switch == "turnOn" ? "Light's activities" : "Light turnDown"

// console.log(result)

//for in: lap qua key
//for of: lap qua value

// for (var i = 1; i <= 3; i++) {
//     console.log(i)
// }
// for (let i = 1; i <= 3; i++) {
//     console.log(i)
// }


// function getRandNumbers(min, max, length) {
//     var array = []
//     for (var i = 0; i < length; i++) {
//         array[i] = Math.floor(Math.random() * (max - min) + min)
//     }
//     return array
// }

// console.log(getRandNumbers(1, 3, 5))


// function getTotal(array) {
//     var sum = 0
//     for (var prices of orders) {
//         sum += prices
//     }
//     return sum
// }
// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal(array) {
//     var sum = 0
//     for (var i = 0; i < array.length; i++) {
//         sum += array[i].price
//     }
//     return sum
// }



// // Expected results:
// console.log(getTotal(orders)) // Output: 8700000

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// orders.forEach(function (order) {
//     console.log(`Salary: ${order.price / 1000}$`)
// })




//includes method 
// var title = 'responseive web design'

// console.log(title.includes('Responsive', 1))

//call back

//document.write('1st HN, 2nd Thomas')
// var pNode = document.getElementById('hoping')

// console.log(pNode)


// var pHope = document.querySelector('a')
// console.log(pHope)
// pHope.href = 'I will be rich'
// pHope.textContent = 'I will be rich';


//innerHTML, outerHTML
// var course = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// function render(courses) {
//     var newArr = courses.map(num => '<li>' + num + '</li>')
//     document.querySelector('ul').innerHTML = newArr.join('')
// }

// // render(courses)

// render(course)

// var liElement = document.querySelectorAll('li')

// Object.assign(liElement[0].style, {
//     color: 'blue',
// })

// console.log(liElement)




//DOM events
//1. Attribute
//2. assign event using the element node
var btnElement = document.querySelector('button')
// console.log(btnElement.classList)
var h1Element = document.querySelector('h1')

btnElement.onclick = function () {
    h1Element.classList.toggle('turnOn')
    if (h1Element.classList.contains('turnOn') == true) {
        h1Element.textContent = 'Toggle Off'
        h1Element.style.color = 'brown'
    }

    else {
        h1Element.style.color = 'orange'
        h1Element.textContent = 'Toggle On'
    }
}


var inputElement = document.querySelector('input[type="text"]')

inputElement.onchange = function (e) {
    console.log(e.target.value)
}