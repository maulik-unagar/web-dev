// chapter - 5 in js notes 
// array is a collection of multiple data types - we can add numbers , string and objects in array 

// ex- while getting the data from data base in any blog site we get the array of objects , whiich contain title , description & tags of all blogs 

// let arr = [1,2,3,4,5];

// console.log(arr);
// console.log(arr.length);

// strings are immutable and arrays are mutable 
// we can do this type of work only with array
// arr[0] = 566;
// console.log(arr);
// this cant be done with the string lets check
// let a = "ABCD"
// a[0] = "Z"
// console.log (a)

// js give type of array = object 
// console.log(typeof(arr))

// now our array will be converted to string - comma saperated string - cant recognised by seeing 
// console.log(arr.toString())

// use join to give the bridge element bet the array - comma will be replaced by and  
// console.log(arr.join(" and "))

// pop - used to return the poped element - it will return the last element 
// console.log (arr.pop())

// push - mostly used - used to push the element 
// console.log (arr.push(100))
// console.log(arr)

// shift - used to remove the first element - where pop removes the last element 
// arr.shift()
// console.log(arr)

// unshift- used to add at the first - same as push but from opposit side 
// arr.unshift("new")
// console.log(arr)
// shift is same as pop but from other side 

// delet - used to delet Element
// still the length will be same as the old array but value will be undefined 
// delete arr[0];
// console.log(arr)
// output - [ <1 empty item>, 2, 3, 4, 100 ]

// concat - used to join the array 
// let l = [11,22]
// let m = [33,44]
// let n = [55,66]

// console.log (l.concat(m,n))


// sort - used to sort the array 
// let mm = [23,11,67,3];
// console.log(mm.sort())
// it compares the elements as string so we may not get the right answer 


// splice - used to remove the part of array 
// let nj= [1,2,3,4,5]
// console.log(nj.splice(1,3))
// used this to remove element from array and add rest in original array at that removed part
// console.log(nj.splice(1,3,8,8,8,8))
// console.log(nj)
// we may forgate this but refer notes at time of usage


// slice - slice out the piece of array - it gives new array ,original is as it is 
// console.log(nj.slice(1,4))

// reverse - used to reverse the sorce array 

