let a = prompt("enter first number ");
let b = prompt("enter second number ");

// but if we pass the my name in "a" then also it will run and give "nun" as output - this is bcz of forgiving nature of js - it will not give the error 
// but we have to handle the excption so that no bug comes in our code 
// so we will make the custom error which will be thrown once the user enter the wrong input type

// if (isNaN(a) || isNaN(b)){
//     throw SyntaxError ("sorry !! plz enter correct Number ")
// }


// in above case we are manully giving error if user enters the wrong data type 
// but now we will handle the unknown comming error by try-catch block

let sum = parseInt(a)+parseInt(b);

try {
    console.log(sum * z);    
    // here z is not defined , so it will give error 
} catch (error) {
    console.log("error agya bhai ")
}
finally{
    console.log("this will run always ")
}

// teachers generaly say that finaly is a block jo hamesh chalega hi - to bhai me to yrr finall ke bina bhi to kr sakta hu - same he to he finaly ke bina bhi 
// finaly is used in functions - bcz of return - generaly code after the return dont get executed but is we want to run code after the return then we use finaly block 
// ex- put this code in function to put return 
function addNumbers() {
    let x = prompt("Enter first number ");
    let y = prompt("Enter second number ");
    let summ = parseInt(x) + parseInt(y);

    try {
        console.log(summ);
        return true;
    } catch (error) {
        console.log("Error occurred");
        return false;
    } finally {
        console.log("files and Database connection is closed ");
    }
}

addNumbers();  // Call the function to execute
// now if we dont give the finaly here then db-connection will not close bcz function will stop execution after return & try and catch both are containing the return statement here
// and this is the most imp. question for interview 


// try-catch works only in synchronously condition - if we put setTimeout in try block then catch will not work and try-catch block dies 

