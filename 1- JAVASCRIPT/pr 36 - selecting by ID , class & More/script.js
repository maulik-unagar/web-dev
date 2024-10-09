// chapter 7 ---------------

// this things are mostly used while making the projects 

// let aa = document.getElementsByClassName("box")
// aa[2].style.backgroundColor = "red"

// document.getElementById("blue").style.backgroundColor="blue"

// query selector - used to target the first element using this class - we use query selector to directly apply the css 
// document.querySelector(".box").style.backgroundColor = "green";
// remimber that we have used .box now but in all other cases we didnot used "." 

// but we also have the queryselectorAll which selects the all elements having that class - but it returns the node collection which cant be applied with css like above we did - so we use the forEach loop to do so 
// lets see how node collection looks like 
// console.log(document.querySelectorAll(".box"))

// this cantt be applied css - so lets use forEach loop 

// document.querySelectorAll(".box").forEach((e) => {
//     e.style.backgroundColor = "green"
// })

// this will apply the green color in all the boxes
// till now we were getting the list of element in array form and bcz of that we were able to access the elements and able to give the css but css cant be applied on node collection 
// ex- here we will get the list of html collection 
// console.log(document.body.getElementsByClassName("box"))
// hance node collection cant be applied with css directly and we have to use forEach loop to apply css on it , where in html list collection we can apply direct css


// contains - returns true if element A contains element B 
// console.log(document.querySelector(".container").contains(document.querySelector("body")));  -- false 
// console.log(document.querySelector("body").contains(document.querySelector(".container")));  --- true 




