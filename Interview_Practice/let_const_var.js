// 1-- Hoisting

// let & const declaration are hoisted
//but these are being in temporal dead zone for time being in sperate --> {script Memory Space} object 

// TDZ (temporal Dead Zone) when our let & const variable are hoisted in seprate mermory space (Script) but it not has been initialize || declared so this phase is know as TZD

//🖤 from hoisting to till before its get value|| declare

// but var is in Global object
// let & const can't be access before you initilization or declaration

// // let a;
// let a = 10;
// console.log(a)
// var b = 100;


// 2-- Relation bw Global object & var let ,const
// window.a  =  undefined
// window.b = 100  //window means global object



// //3-- let vs const
// let a;
// const b = 100    //like a variable not possible {give you type error}
// a =  10







//✅Diffrence bw Syntax|TypeError| RefrenceError

// 1--TypeError
// const b = 100
// b=100  //TypeError: Assignment to constant variable.

// 2--Syntax Error
// const con; // SyntaxError: Identifier 'b' has already been declared




//3--Refrence Error
// whenever js try to find a variable in a memory Space but it not find that var in memeory..

// console.log(y)  //RE
// console.log(x)  //RE
// let x =10




// -------------------

//4️⃣. what should be used 
// 1 position -  you shoud used const  
// 2 position -  let
// 3 position -  var 

// let & var put in TDZ so we dont get any thing like undefined in program


//5️⃣ How to Avoid TDZ
// put initialization & declaration on the top


