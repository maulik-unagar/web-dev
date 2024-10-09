// just type log and enter you will get - console.log("")
// we can also make snippet by going on setting and then on snippet and then choosing language  - if make log as a snippet of "console.log" then by typing just log we can get whole "console.log"

// let prom1 = new Promise ((resolve , reject) =>{
//     let a = Math.random();
//     if (a<0.5){
//         reject("no the number is less then 0.5 !! PLZ TRY AGAIN")
//     }
//     else{
//         setTimeout(() => {
//         console.log("2 sec time over ");
//         resolve("i am resolved ")        
//     }, 2000);
//     }
// })

// prom1.then((a)=> {
//     console.log (a)
// })

// most of the time we use promise in network request and when it is received we just print the data received through it 
// to handle the error we have to do exception handling so just comment the .then block given above 

// prom1.then((a)=> {
//     console.log (a)
// }).catch((err) =>{
//     console.log(err);    
// })
// now we will not get the error in console of browser . insted we will get exception statement 

// promise chaining - its a chain of promise which are passed with resolved value to other promise 
// ex- prom1.then(function(resolve)=>{
//     alert(result);
//     resolve("hii")
// }).then.....    -- like wise other resolved promise passed -- its just a simple example code 

// read notes for more clearity 

