// chapter 11

// let obj = {
//     a: 1 , 
//     b: "maulik"
// }

// console.log(obj)
// // on expanding the object we get the prototype of it - which contains all the additional property of object 

// // lets make the custom prototype so that we can access the additional property of object 

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };
// rabbit.__proto__ = animal;   // sets rabbit.[[prototype]]= animal 


// but this is not innuf we need proper oop for real world problem - which can be done by class 
// prototype is just the way to add the new property in object 

class animal {
    constructor(name){
        // now new property will be added for a as name  - check a.bunny in console 
        this.name = name 
        console.log("heyy " + name + " object is created ");        
    }
    eats(){
        console.log("kha raha hoon")
    }
    jumps(){
        console.log("kood raha hoon")
    }
}

class lion extends animal{
    constructor(name){
        super(name)
        // when we extend the class we Must call super constructor in new class before accessing 'this' keyword
        // now super will go to upper main class and run  the constructor of main class and then name declared here can be accessed 
        this.name = name 
        console.log("heyy " + name + " object is created and he is lion  ");        
    }
}

let a = new animal("rohan");
console.log(a);

let l = new lion("sher")
console.log(l);


// now do this in console 

// a.eats()
// output -- kha raha hoon
// a.jumps()
// output -- kood raha hoon



// then there is the getters and setters - its skipped by harry - bcz its is not mostly used - it may be used in library or the complex code which need to be managed consistently 
// tip from harry - in most of the website he delivered to his clients he did not used oop 
// and remimber it is very rarely used and when it will be used you should know it - otherwise you will be out of that project 


// l instanceof lion
// output -  true
// here we are asking that is l made from lion - and the output is true 

// a instanceof lion
// output - false
// here we are asking that is "a" made from lion - and the output is false bcz a is made in animal and lion is made after the animal class 
// so "a" is not made from lion - it is made from animal and lion is made from animal




