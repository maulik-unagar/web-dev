// chapter 7 - walking the dom - read notes also 



// document.body.childNodes
// type this in console of browser
// we will get all the elements of body . first will be text node bcz we used newline in code after body tag 

// document.body.childNodes[1].childNodes - type this in console - we used 1 bcz first is the text node and second is div - and then all child node of div is accessed here 

// but we dont want the text node as child so cant we ignore it - use firstchildelement 
// const x = document.body.firstElementChild.firstElementChild.
// console.log(x)

// document.body.firstElementChild.firstElementChild.style.backgroundColor="blue" - use in console
// document.body.firstElementChild.lastElementChild.style.backgroundColor="red" - use in console

// here we are navigating in dom 
//  document.body.firstElementChild.lastElementChild.parentElement.style.backgroundColor="gray"
// document.body.firstElementChild.parentElement.style.backgroundColor="blue" 
// parent element is container div here 
// do practice it 

// remimber if we use child nodes we are talking of all node element in html including textnode , comments also . hance if we give first child and there is comment there then it will take that comment as a first node 
// and if we use firstelementchild then only elements will be counted like div 
// ex-
// document.body.firstElementChild.childNodes -- in console
// document.body.firstElementChild.children-- in console
// this will give the all child nodes and all element node of the div 



// document.body.firstElementChild.children[3]   - box 4  ---  best to use 
// document.body.firstElementChild.children[3].previousElementSibling  - box 3 
// document.body.firstElementChild.children[3].previousSibling      - text node bet. box4 and box3


// if we have multiple div container then we can use 
// document.body.children
// then by using children[2] we can get the 2nd container div easily 

// then there is the table methods - used to target any element in table  - can just read it from notes 