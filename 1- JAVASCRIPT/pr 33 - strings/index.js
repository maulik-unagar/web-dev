// chapter 4 

let a = "ABCDE"
// string is iterable

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

console.log("length of a is - " +a.length)
console.log(`hey !! ${a}`)


// name was the object globaly before and that is the reason we see the line on name
name = 3;

// we can also write js on browser console -- its same as node repel on terminal 

console.log ("ab'cder") 
// this will work 
// console.log ("ab"cder") 
// but this will give error 

// use escape sequence to solve it - very less used 
console.log ("ab\"cder") 
console.log (a.toLowerCase()) 
// dont forget to put bracket at last bcz its function - it will give the output given below if you dont put brsacket 
// [Function: toLowerCase]

console.log(a.replace("AB" , "899"))

// below both are same 
console.log (a.concat("- this is extra added "))
console.log (a +"- this is extra added ")