// exercise question 
// create the business name generator by combining list of objects


const obj1 ={
    1:"crazy",
    2:"amazing", 
    3:"Fire" 
}
const obj2={
    1:" engine",
    2:"foods" , 
    3:"garments"
}
const obj3 ={
    1:" browa",
    2: "limited", 
    3: "hub"
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomInt1 = getRandomInt(1,3);
const randomInt2 = getRandomInt(1,3);
const randomInt3 = getRandomInt(1,3);

console.log(obj1[randomInt1]+" " +obj2[randomInt2]+" " +obj3[randomInt3])

