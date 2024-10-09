console.log("Hey!! how are you ");

var a = 10 ;
var b = 20 ;
console.log (a+b+10);
// js automaticallty identifies the type of variable 
console.log(typeof a, typeof b)

// read js notes from link to clear all concept of js

// always use let bcz it will be automatically global & local scoped according to declaration for example
let e = 10 ;
{
    let e = 11 ;
    console.log (e);
}
console.log(e);

// if we use var here then it will give 10 in both case bcz it globle scopped by default 

// objects - its a used defined detatype 

// all primitive data types
let g = "abc";
let h = 22;
let i = 3.44;
let j = true ; 
let k = undefined ;
let l = null ; 

console.log (g,h,i,j,k,l);
console.log (typeof g ,typeof h ,typeof i ,typeof j ,typeof k ,typeof l);

// note(imp. que) - type of null is object - bcz its historically pre written and many code relay on this concept hance it cant be corrected 

// objects - key value pair combination 
let m = {
    name : "ABC",
    "job salary" : 300
    // name is not is ("") bcz we dont have space there . we can provide key with double qute and without double quote  
}
console.log(m);
// use this to add to object
m.department = "tech";
console.log(m);
// use this to update the fild which is already there 
m.department = "tech203";
console.log(m);



