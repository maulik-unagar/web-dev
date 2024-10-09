// now we will learn about the loops - this is part of array only 
let a = [1,3,32,65,89,100]

// for loop - its syntax is given by emmet 
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// for each loop -- calls a function once for each array element 
// a.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// });
// output : --it vill be in format of value index array 
// 1 0 [ 1, 3, 32, 65, 89, 100 ]
// 3 1 [ 1, 3, 32, 65, 89, 100 ]
// 32 2 [ 1, 3, 32, 65, 89, 100 ]
// 65 3 [ 1, 3, 32, 65, 89, 100 ]
// 89 4 [ 1, 3, 32, 65, 89, 100 ]
// 100 5 [ 1, 3, 32, 65, 89, 100 ]


// for in loop --- use tab to change key & obj variables in one click- mainly used in context to object 
// let obj = {
//     a : 1, 
//     b : 2,
//     c : 3
// }
// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key , element)
//     }
// }


// for of loop -------- used for arrays 
// for (const element of a) {
//     console.log(element )
// }

// map and filter are mostly used 
// map-----creates new array by performing some operation on each array 
// oldway: ---------------------
// let arr1= [1,2,3,4,5];
// let arr2=[];
// for (let index = 0; index < arr1.length; index++) {
//     const element = arr1[index];
//     console.log(element)
//     arr2.push(element+3)
  
// }
// console.log(arr2)
// new way: ------------------
// note - arrow function me ek function ho to , bracket laga ne ki zarurat nahi he 
// let arr1= [1,2,3,4,5];
// let arr2 = arr1.map((e)=>{
// // let arr2 = arr1.map(e=>{  --- this is same as above - if we have single element like "e" here then we can ignore using the bracket 
// // let arr2 = arr1.map((event , element , array)=>{
//     return e+3
// })
// console.log(arr2)



// filter  - very imp in react 
// let arr1= [1,2,3,4,5];
// // here we are making the function 
// const greater = (e) =>{
//     if (e>4){
//         return true 
//     }
//     else{
//         return false
//     }
// }
// console.log(arr1.filter(greater))
// -------------------above and below are same
// let arr1= [1,2,3,4,5];
// console.log(arr1.filter((e) => {
//     if (e >4){
//         return true
//     }
//     else{
//         return false
//     }
// }))


// reduce - reduces the array to single number - less used (but it makes life easy if we remimber it but people foergets it )
// it can be used to find the factorial 
let arr1 = [1, 2, 3, 4, 5];

const multiply = (a, b) => {
    return a * b;
};

console.log(arr1.reduce(multiply));
// ------------------above and below are same-----

console.log(arr1.reduce((a, b) => {
    return a * b;
}));

// array.from - use to create the array from object, string or any other collection
// let v = Array.from("this ")
// console.log(v)
