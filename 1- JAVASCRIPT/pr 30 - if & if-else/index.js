// chapter - 2  

console.log("this is first line ")

// till now we were using node index.js to run the js file bow will use code runner extensiom

// now install the code runner extension to run the code here only 
// now we will see the output in output section 

// go to setting and enable the code runner - run in terminal to see the output in terminal section , not in output section 
// its similar to rinning node index.js in terminal now 
// try it 

// we can also make terminal to  a tab by draging it to there
// and we can also take side by side view of terminal and code by draging  

let age = 0;
let grace = 2;

// or we can use ----  age += grace;
// in js semicallan (;) is optional - bcz js is very forgiving language - it tries not to give the error
if ((age+grace) == 18){
    console.log("Plz dont drive ")
}
else if (age>19 && age <50){
    console.log("You can drive ")
}
else if (age >= 0 && age <= 17){
    console.log("are you Kidding ")
}
else {
    console.log("you are expert driver ")
}

// = is used for assigning value 
// == is used for chacking equality 
// === is used to check the equality with value and type 

if (age = 18){
    console.log ("this will be always printed ")
}

// never select any part of code and click on run button - it will run only selected part and new folder will be created named tempcoderunner

// lets explore the node repel 
// press windos + terminal and open the terminal 
// click node and enter 
// now its node repel - used for read ,evalute ,print , loop

// do this in repel 
// 22 + 22

// "3" == 3 -- true 
// it gives true but its note true bcz js just compares value , if we want js to compare type also then use === . 
// "3"===3 -- false


// Ternary operater 
y = 10;
z = 20;
w = y>z? (y-z) : (z-y)
console.log(w)