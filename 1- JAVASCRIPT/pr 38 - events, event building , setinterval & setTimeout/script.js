// chapter 8 

let button = document.getElementById("btn")

button.addEventListener("click" ,() =>{
    document.querySelector(".box").innerHTML = "Button is clicked " ;
})

// there are many types of events in js - explore it on mdn refrences 
// ex- here you can refer the all events related to mouse 
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent 

document.addEventListener("keydown" ,(e) =>{
   console.log(e);
})
