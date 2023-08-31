//! CallBacks

// function printValue(name, callBack) {
//   callBack("hello " + name)
// }

// printValue("nevil", (string) => {
//   console.log(string)
// })

//! clousers
// console.log(n1) // refernce error n1 is not defined
// function outerFunction(n1) {
//   let outerVar = 30
//   return function PrintValues(n2) {
//     console.log(n1)
//     console.log(n2)
//     console.log(outerVar)
//   }
// }

// const a = outerFunction(10)
// a(20)

//o/p  -> 10 20 30

//! const

// const c1 = 10

// c1 = 20 //caught TypeError: Assignment to constant variable.at script.js:31:4

// console.log(c1)

//? const with array or obj

// const arr = [1, 2, 3, 4]
// arr.push(10)

// console.log(arr) //[1, 2, 3, 4, 10]

// arr = 1 // In array or also in object we can change obj,array value but can not reassign array or obj to number

// console.log(arr) // typeError : ssignment to constant variable

//!var

// {
//   var b = 10
// }

// console.log(b) //10 -> brack all scoping rule

// console.log(n) //n=10
// var n = 10
// console.log(n) // n=10

// When

// console.log(n) //reference error
// let n = 10
// console.log(n)

//!Array
// const a = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, 9, 10, 11],
//   [12, 13, 14, 15, 16, 17],
// ]

//print 3,10,17

// console.log(a[0][2])
// console.log(a[1][3])
// console.log(a[2][5])

//!object

// const car = {
//   make: "nissan",
//   modal: "i10",
//   isUsed: true,
//   makeNoice() {
//     console.log("vroom")
//   },
// }

// car.temp = "temp"
// console.log("🚀 ~ file: script.js:87 ~ car:", car)

// const property = "model"
// console.log(car[property]) //use [] bracket notaiton when propertu stored in variable
// function yo() {
//   console.log("hello")
// }

// yo()

//!pass by value

// let a = 10
// let b = 20
// let c = a
// c = c + 1 ->here c = 10 and c = 10 + 1 => 11

// console.log(a)
// console.log(b)
// console.log(c)

// o/p -> 10
// 20
//  11

//!pass by refrences

// let a = 10
// let b = 20
// let c = [1, 2, 3, 4]
// let d = c
// d.push(5)

//here array and object not directly store as above  like a = 10
//  it save in the memory and then that memry number will save in variable a = <ax01> and  <ax01> have [1,2,3,4]
// thats why if i change d then c also change because both share same memory
//this all works same as object also

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

/*  o/p -> 10
        20
        [1,2,3,4,5]
        [1,2,3,4,5]
*/

// const a = [1,2]
// const b = [1,2]
//console.log(a===b)  //false because both have not same address

//? when we pass the array and also number and chnage the array by add number in the function why array outside also change

// const a = [1, 2, 3] //0x01
// const elementToAdd = 3 //hardcoded value => 3
// // add(a, elementToAdd) // add(0x01,3)
// console.log(a)
// console.log(elementToAdd)
// function add(array, element) {
//   element = element + 1 // 4 =3+1
//   array.push(element)
//   // [1,2,4] ->because of the passby reference it will directly change into memory address that why outer is also change
// }

//! Array Methods

// function addTolast() {
//logic
// }

// const obj = {
//   push: addTolast,
// }

//function inside object is  called method

const a = [1, 2, 3, 4, 3, 3, 3, 5, 6, 7]

//for-each => to looping through each element of the array
// a.forEach((ele, index) => {
//   console.log(ele)
//   console.log(index)
// })

// map = to manupulate array
// const doubleArray = a.map((ele, index) => {
//   return ele * 2
// })
// console.log("🚀 ~ file: script.js:178 ~ double ~ double:", doubleArray)

//filter =>filter the array elemnt from the array

//filter return value using bool -> true or false
// const filteredArray = a.filter((ele) => ele !== 3)
// console.log("🚀 ~ file: script.js:183 ~ filteredArray:", filteredArray)

//find - find the elemet whitch exist in array
//return first element value
// console.log(a.find((ele) => ele > 3)) //4

//some - return true when some element is match minimul is 1
// const isTrue = a.some((ele) => (ele = 1))
// console.log(isTrue)

//reduce - return one value ->use in react
// const sum = a.reduce((ele, ecc) => ele + ecc, 10) //->10 will be inital value
// console.log(sum)

//includes => check that number has inthe array
// console.log(a.includes(4)) //true

//convert array into string
// console.log(a.toString())

//join
// console.log(a.join("+"))

//pop
//remove last element from original array
//return last elemnet
// console.log(a.pop())

//shift
//remove first element from original array
//return first element
// console.log(a.shift())

//unshift
//add new element in begining and return new array

// temp = a.unshift(1, 2, 3, 4, 4, 5)
// console.log(temp) //return new array length

// delete a[1]
// console.log(a) //delete element and leaves empty

//concate -> concate two array methods and does not change original array ->use in react
// let temp = [1, 2, 3, 4, 5]
// let newConctedArray = temp.concat(a)
// console.log("🚀 ~ file: script.js:230 ~ newConctedArray:", newConctedArray)

//sort -> sort original array
// const array = [3, 2, 4, 2, 12, 1, 1]
// g = array.sort()
// console.log("🚀 ~ file: script.js:235 ~ g:", g)
// console.log(array)

//splice -> array.splice(index,howManyElement,elemets ) ->overwrite original array ->use to update element in react
// let ary = [1, 2, 4]
// ary.splice(1, 3, 9, 8, 7)
// console.log("🚀 ~ file: script.js:240 ~ ary:", s)

//slice -> slice out from the array and create new array
// let temp = a.slice(0, 2)
// console.log(temp) //1,2

//reverse
//console.log(a.reverse())

// isArray
// console.log(Array.isArray(a))

//index of
// console.log(a.indexOf(1))

//last index of
// console.log(a.lastIndexOf(1))

//find
// console.log(a.find((ele) => ele > 1)) //return first metching element

//findindex
// console.log(a.findIndex((ele) => ele === 1)) return first element index

//from
// let String = "nevil"
// console.log(Array.from(String))

//! new,this keyword

// function human(name, age) {
//   return { name: name, age: age, clg: true }
// }
// console.log(human("nevil", 21))

// we can also create this function same way using this

// function Human(name, age) {
//   let age -> script.js:279  Uncaught SyntaxError: Identifier 'age' has already been declared
//this ={} its create this object
//   this.name = name
//   this.age = age
//return this keyword behind the seen
// }

// const data = new Human("nevil", 21)
// console.log(data)

//! window object - it is the globel object use for access - alert ,console.log ...
// window.addEventListener("resize", (e) => {
//   console.log("resize")
// })

//! document
// document.title = "nevil javascript"

// const container = document.createElement("div")
// container.innerHTML = "hello Div"
// document.body.appendChild(container)
// console.log(document.documentElement) //this print out html code

//! prevent default

// const anchore = document.querySelector("a")
// anchore.addEventListener("click", (e) => {
//   e.stopPropagation()
//   e.preventDefault()
//   console.log("object")
// })

// const printClick = (e) => {
//   console.log("clicked")
// }

// const btn = document.querySelector("button")
// btn.addEventListener("click", printClick)

// btn.removeEventListener("click", printClick) //remove event listener

//!arrow function and normal function -> inside function this keyword return differnt

// const btn = document.querySelector("button")

// btn.addEventListener("click", () => {
//   console.log("arrow function")
//   console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// })

// btn.addEventListener("click", function () {
//   console.log("normal function")
//   console.log(this) //<button> click </button>
// })

//both function return differnt global object
// -> arraow function return ->indow {window: Window, self: Window, document: document, name: '', location: Location, …} ->global object
// -> if you need current object like normal function use e.target

// ->normal function return current object which is <button>Click</button>

//! datasets control using js

// const btns = document.querySelectorAll("button")

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     let clickCount = parseInt(btn.dataset.click)
//     btn.dataset.click = clickCount + 1
//   })
// })

//!select element in javascript

//?select direct element in js
// const grandParent = document.querySelector("#grand-parent")
// const parent = document.querySelector("#parent-1")
// const childOne = document.querySelector("#child-1")

// grandParent.style.color = "red"
// parent.style.color = "yellow"
// childOne.style.color = "purple"

// ?parent > child
// const grandParent = document.querySelector("#grand-parent")
// const parent = grandParent.children  ->use .children
// parent[0].style.color = "purple"
// parent[1].style.color = "green"

//?select second parent
// parentOne = parent[0]
// console.log("🚀 ~ file: script.js:370 ~ parentOne:", parentOne)
// parentTwo = parentOne.nextElementSibling  ->use .nextElementSibling
// parentTwo.style.color = "red"

//?parent >children >child
// const grandParent = document.querySelector("#grand-parent")
// const parent = grandParent.children
// const childs = parent[0].children
// childs[0].style.color = "green"

// childs.forEach((child) => {
//   return (child.style.color = "red")
// })

//? select child to parentelement
// child > parent > grandparent
// const childOne = document.querySelector("#child")
// const parentOne = childOne.parentElement // ->.parentElement
// console.log(
//   "🚀 ~ file: script.js:389 ~ parentOne.parentElement:",
//   parentOne.parentElement
// )

//* shortcut way to select parent element
// .closest() function same as the queryselector but it select parent element

// const childOne = document.querySelector("#child-1")
// const grandParent = childOne.closest("#grand-parent")
// grandParent.style.color = "purple"

//in Closest
/*
  <div id="red">
    <div id="red"> -> it select closest one 
      <div id="child">
      </div>
    </div>
  </div>
*/
// console.log(
//   "🚀 ~ file: script.js:398 ~ childOne.closest("#id"):",
//   childOne.closest("#grand-parent")
// )

//?select direct child using grandparent

// const grandParent = document.querySelector("#grand-parent")
// const child = grandParent.querySelectorAll("#child")    parent.querySelectorAll("")
// child.forEach((c) => {
//   c.style.color = "red"
// })

//
// const number = 0 //-> 0 = false
//if you want to chech in variable wheter the value is available  or not use number!=null

//wrong
// if (number) {
//   console.log("true")
// } else {
//   console.log("false")
// }

//right
// if (number != null) {
//   console.log("true")
// } else {
//   console.log("false")
// }

// ternary oprator

// const userLogin = true

// const printValue = userLogin ? "Welcome Back" : "You need to login first"
//ternary return value according to the condition

// console.log(printValue)

//!switch

// const numberOfDay = 9

// switch (numberOfDay) {
//   case 1:
//     console.log("sunday")
//     break
//   case 2:
//     console.log("monday")
//     break
//   case 3:
//     console.log("tuesday")
//     break
//   case 4:
//     console.log("wed")
//     break
//   case 5:
//     console.log("thursday")
//     break
//   case 6:
//     console.log("friday")
//     break
//   case 7:
//     console.log("saturday")
//     break
//   default:
//     console.log("check you number of Day value")
// }

// const person = {
//   name: "nevil",
//   friend: {
//     name: "raj",
//     friend: {
//       name: "parth",
//     },
//   },
// }

// let currentPerson = person

// while (currentPerson != null) {
//   console.log(currentPerson.name)
//   currentPerson = currentPerson.friend
// }

//!recursion -> function call itself

// function printNumber(number) {
//   console.log(number)
//   if (number >= 10) return
//   printNumber(number + 1)
// }

// printNumber(1)

//sum of number using recursion

// function sum(num) {
//   if (num <= 0) return 0
//   return num + sum(num - 1)
// }

// console.log(sum(10))

//!sort curcuite evaluation

// true || true || false // compiler first found true in first statement then it not check after that oprator

// false && true // compiler first found false in first then it not check after that in && oprator

// function printValue() {
//   rno = rno || "nevil"

// work same as
// if (rno === null) {
//   rno = "nevil"
// }
//   console.log(rno)
// }

// printValue()

//!asyncronus

// setTimeout(() => {
//   console.log("hi") //->?after 1 second print hi
// }, 1000)

// console.log("after setTime out function") //?-> print first

//o/p -> after setTime out function
// hi

//->this output shows that callbacks in javascript are asyncronous
// that why o/p look like this

//'draw back if so many callback are their it create callback hell
/*
  ex:
      setTimeout(() => {
        console.log("cb1") //->?after 1 second print hi
            setTimeout(() => {
              console.log("cb2") //->?after 1 second print hi
                  setTimeout(() => {
                    console.log("cb3") //->?after 1 second print hi
                  }, 1000)
            }, 1000)    
      }, 1000)

this code hard to read that's why promise is solve this problem

*/

//!promises -> it has two state -> pending,fullfiled and reject

//!usecasese
/*
    Handling Asynchronous Operation
    Sequential and Chained Execution
    Error Handling -> using .catch()
    Synchronization of Multiple Operations ->>Promise.all() or Promise.race()
    Compatibility with Async/Await
*/

//!realworld usecases
/*
  Making API requests
  File handling
  Database interactions
*/

//* this is syncronose code
// const promise = new Promise((resolve, reject) => {
//   const n = 19
//   if (n === 10) {
//     resolve("number is 10")
//   } else {
//     reject("Error number is not equal to 10")
//   }
// })

// promise
//   .then((msg) => {
//     console.log(msg)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

//this is asyncronnous code and also remove callbackhell from below code
// setTimeout(() => {
//   console.log("cb1") //->?after 1 second print hi
//   setTimeout(() => {
//     console.log("cb2") //->?after 1 second print hi
//     setTimeout(() => {
//       console.log("cb3") //->?after 1 second print hi
//     }, 1000)
//   }, 1000)
// }, 1000)

//above same code written with promise

// function promiseFunction(duration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, duration)
//   })
// }

// const promise = promiseFunction(1000)

// promise
//   .then((result) => {
//     console.log("1")
//     return promiseFunction(1000)
//   })
//   .then((result) => {
//     console.log("2")
//     return promiseFunction(1000)
//   })
//   .then((result) => {
//     console.log("3")
//     return promiseFunction(1000)
//   })
//   .then((result) => {
//     console.log("4")
//     return promiseFunction(1000)
//   })
//   .catch((err) => {
//     console.log("2")
//   })

//this code remove callback hell

// example
//create the promise version of addEvent listener

// const button = document.querySelector("button")

// function buttonPromise(element, method) {
//   return new Promise((resolve, reject) => {
//     element.addEventListener(method, resolve)
//   })
// }

// const buttonPromiseVerison = buttonPromise(button, "click")
// buttonPromiseVerison.then((result) => {
//   console.log("clicked")
//   console.log(result)
// })

//Some more methods for Promise
// Promise.all([])

// Promise.resolve("value")
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

//*.all()

// Promise.all([
//   Promise.resolve("hello"),
//   Promise.reject("error 1"),
//   Promise.resolve("hello"),
// ])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.error(err)
//   })  //->o/p -> error 1

//*.any() ->return resolve message first

// Promise.any([
//   // Promise.resolve("hello 1"),
//   Promise.reject("error 1"),
//   Promise.resolve("hello 2"),
// ])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.error(err)
//   }).finally(()=>{
//      console.log("finnally")
//    })
//o/p -> hello 2

//* .race method -> if rsolve is first then it will return resolve else return reject
// Promise.race([
//   // Promise.resolve("hello 1"),
//   Promise.reject("error 1"),
//   Promise.resolve("hello 2"),
// ])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.error(err)
//   })

//* allSettled ->return array of status

// Promise.allSettled([
//   Promise.resolve("hello 1"),
//   Promise.reject("error 1"),
//   Promise.resolve("hello 2"),
// ])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((err) => {
//     console.error(err)
//   })
// o/p ->(3) [{…}, {…}, {…}]

/*   [{ status: "fulfilled", value: "hello 1" },
  { status: "rejected", reason: "error 1" },
  { status: "fulfilled", value: "hello 2" }]
*/

//!async await wayto write promises
// ->its make code more readable

// const promise = new Promise((resolve, reject) => {
//   let n = 10
//   if (n <= 10) {
//     resolve("resolved")
//   } else {
//     reject("error : n > 10 that's why rejected")
//   }
// })

// async function callPromise() {
//   try {
//     const result = await promise
//     console.log(result)
//   } catch (error) {
//     console.error(error)
//   }
// }

// callPromise()

//! event delegetion means delegate all diffrent things you click ->button -> body -> document
//when i click on button document and body also behind it

// document.addEventListener("click", () => {
//   console.log("document click")
// })

// document.body.addEventListener("click", () => {
//   console.log("body clicked")
// })
// const buttons = document.querySelectorAll("button")
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log("button clicked")
//   })
// })

//o/p button clicked
//  body clicked
//  document click

//!matches ->  e.target.matches("button")

//!storages in browser

//localstorage              |cokkie           | session
// 10MB                     |    4kb          |  5kb  ->storage are vary upon browser to browsers
// never expires            |Manual expires   | exxpire on tab close
// available only in client | use for send data client to server | client

// localStorage.setItem(
//   "cartData",
//   '[{ "productname": "laptop", "price": "30,000" }]'
// )

// localStorage.setItem("paymentData", '[{ "paid":"true" }]')

// console.log(JSON.parse(localStorage.getItem("cartData")))
// localStorage.removeItem("cartItem")
// sessionStorage.removeItem("paymentData")

// !cookie
// document.cookie = "name=nevil" //default expire time -> session -> tabclose
// const date = new Date(2024, 0, 1).toUTCString()
// const expireDate = new Date(1999)
// document.cookie = `name=nevil;expires=${date}` //expires ->2023-12-31T18:30:00.000Z
// console.log(document.cookie)
// document.cookie = `name=;expires=${expireDate}`
