// Clousers
// Function Along with Lexical Scope form a Clousers
// whenever function is Created Clousers is Created

//==> Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure


// //1️⃣Ex
// function outer (){
//     var a = 5 ;
//     return function inner(){
//         console.log(a)
//     }
//     a = 100
// }
// //after this line outer function is Vanished but inner() function still Remember it Refrence because of Clousers reason is it return with Lexical Enviourment 
// var z =  outer()
// console.log(z)
// z()   // a=100





// // 2️⃣Ex
// function z(){
//     var a = 100
//     function y(){
//         var b = 7;
//         function x(){
//             console.log(a,b)
//         }
//         a=9
//         x()
//     }
//     y()
// }

// var call = z()


// uses of Clousers
// Module Design Patttrn
// Curring 
// Function like Once 
// memoize 
// maintaining state in async world 
// setTimeout
// Iterators 
// and many more...

