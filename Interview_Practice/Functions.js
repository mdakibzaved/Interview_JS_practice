// Function Statement || Fn Declaration
//1️⃣  a function statement is used to declare a function, which is a set of instructions that can be executed whenever the function is called. 

// a()
// b()   //b is not a function err -> b is initialy js exection phase set as a undefined 
// function a(){
//     console.log("a Called")
// }

// Diffrence is hoisting 


// Function Expression is used to define a function inside any expression
// Function Expression allows us to create an anonymous function that doesn’t have any function name which is the main difference between Function Expression and Function Declaration. A function expression can be used as an IIFE (Immediately Invoked Function Exp...
// // Function Expression
// var b = function (){         
//     console.log("b Called")
// }










//2️⃣ Anonymous Function
// Fun without a name   || according Ecmascript you cant create func without name 

//👋🏻 Anonymous Function is used when the function is used as value 
// function () {
//     //err 
// }






// 3️⃣ Name Function Expression
// var n = function xyz(){   //pass name to annoymous func
//     console.log("NFE")
// }






//4️⃣ First Class Function || First Class Citizens
// passing a function inside the function a another function and    ability to use as a value and passing as a arguement or return from return from another function is called FCF

// var b = function(pram){
//     return function xyz(){
//     }
// }

// var b = function(pram){
//     console.log(pram)
// }
// function xyz(){

// }
// b(xyz)








// Arrow Function
// Arrow functions are another way to create functions in JavaScript
// Arrow function is a concise way to write functions using => syntax.
 
const add = (a,b) => a+b
const square = a => a*a

const hi = ()=>(
    console.log("hi")
)









