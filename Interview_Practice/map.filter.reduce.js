// Map is higher Order Function & In JavaScript, a higher-order function is a function that can accept other functions as arguments, return functions, or both. 


//1️⃣ Map is useful tranform any array and return tranform value with new array
// const arr = [3,4,5,1,2,4,6]

// // Double - [6,8,10,2,4,8,12]
// const newArr1 = arr.map(()=>{
//     return arr*2
// })



//2️⃣ Filter : filter any values
// const arr = [3,4,5,1,2,4,6]

// function isEven(n){
//     return n%2==0  //if even
// }
// const output = arr.filter(isEven)
// console.log(output)




// Reduce : function used where you take all the array Element and Come Up with Single Value
// WAP find Max with Reduce
// Sum

let arr = [1,3,8,3,1,10,70]

const output = arr.reduce((max,curElem)=>{   //acc,curr
    if(curElem > max) max = curElem
    return max
},0);
console.log("Maximum value: ",output)












