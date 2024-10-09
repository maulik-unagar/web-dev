// normally code is compiled line by line but js is asynchronious in nature 
// means it can execute any line of code at any point of time - its not nacessary to execute line by line in case of js 
// lets see the example -

// console.log("i am first line ")
// console.log("i am second line")

// setTimeout(() => {
//     console.log("i am timeout ")
// }, 2000);

// console.log(" i am after timeout ")

// output -- i am first line 
// i am second line
// i am after timeout 
// i am timeout 

// here normal person may think that js compiler will wait for 2 sec to run setTimeout and then next line will be printd 
// but it is not true - it will simply skip that code of line for 2 sec and next code will be executed 


// callbacks - function passed into another function as argument - it is invoked when an function is completed 
// tip - anfn to have the arrow function structure

// const callback =  (arg) => { 
//     console.log(arg)
//  }

// const loadscript = (src , callback) => {
//     let sc = document.createElement("script");
//     sc.src = src ;
//     sc.onload = callback(" I AM LOADED ")
//     document.head.append(sc)
    
// }
// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" ,callback)

// -----------------------------------------------------------------------


// pyramid of doom - callback function is passed again and again - and it becomes deficult to handle the code 

// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" ,(arg ,fn) => {
//     console.log(arg)
//     new_fun("hii " , () =>{
//         new_fun2("hello" , () =>{

//         })
//     }) 
// })

// note - setTimeout is also having the callback - where we are passing the time as callback 
// solution to the pyramid of doom is - promises 




