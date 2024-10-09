// chapter - 3

// function idea(name ) {
//     console.log("heyy " + name + " i have a idea ");
//     console.log("and  " + name + " listen ");
//     console.log("soo. " + name + " i will explain it to you  ");
// }

// idea("maulik")
// idea("shivam")



// function sum(a, b , c = 2) {
//     return a+b+c;    
// }
// console.log(sum(5,5));


// const func1 = (x) => {
//     console.log("i am arrow function" , x)
// }
// its an arrow function which is variable also 
// now our function is captured in variable 
// func1(2);

// ---------faulty calculater - EXcersise question-----------------
// question - this faulty calculator does follow 
// it takes two number as input from user and performs wrong operation as follow 

// + -- > - 
// * -- > + 
// - -- > /
// / -- > ** 

// select z = 1 -> +
// select z = 2 -> *
// select z = 3 -> -
// select z = 4 -> /

// condition - it performs wrong operation 50% of the times 

z = 1;
x = 10 ;
y = 10 ;

console.log( "select 1 -> +");
console.log( "select 2 -> *");
console.log( "select 3 -> -");
console.log( "select 4 -> /");

a = Math.random();
console.log(a);

function calc (x, y){
    if (z == 1){
        console.log(x-y);
    }
    else if (z== 2){
        console.log(x+y)
    }
    else if (z== 3){
        console.log(x/y)
    }
    else if (z== 4){
        console.log(x**y)
    }
    else{
        console.log ("something went wrong ")
    }
}
function correct_calc(x, y){
    if (z == 1){
        console.log(x+y);
    }
    else if (z== 2){
        console.log(x*y)
    }
    else if (z== 3){
        console.log(x-y)
    }
    else if (z== 4){
        console.log(x/y)
    }
    else{
        console.log ("something went wrong ")
    }
}

if (a<0.5){
    calc (x, y);
}
else{
    correct_calc(x,y) ;
}

