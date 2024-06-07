/*
    Categorised in:
                    1. Primitive
                    2. Reference
    
    Divided in two parts-
                        Call by value or call by reference
                        How the data is stored in the memory and accessed from the memory

    Primitive: call by value, original data nahi milta but copy milta hai jispe hum changes krte hain

*/

// Primitive Data type (7 types): String, Number, Boolean, null, undefined, Symbol, BigInt
// NonPrimitve or Reference Data Type: Array, Objects, Functions

//====== PRimitive =========//
const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId); // false

const bigNumber = 56435356456435643564356435n; // bigZInt ho gaya n lgate hi


//===== Reference ==========//
const heroes = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Vishal",
    age: 28
}

const myFunction = () => {
    console.log("Hello World !!!");
}

// console.log(typeof bigNumber); // bigint
// console.log(typeof outsideTemp); // object

function checkType(val){
    console.log(typeof val);
}
checkType(bigNumber); // bigint
checkType(outsideTemp); // object
checkType(id); // symbol
checkType(myFunction); // function



// +++++++++++++++++++++ STACK AND HEAP MEMORY ++++++++++++++
/**
 * Two Type Of Memory:
 *                  1. Stack (Primitive types ke liye stack memory use hoti hai)
 *                  2. Heap (Reference types ke liye heap memory use hoti hai)
 *                  
 * NOTE:
 *      Jab bhi "Stack Memory" use hoti hai, hume variable ka copy milta hai
 *      Jab bhi koi value "Heap Memory" mein jati hai, hume uska reference milta hai, mtlb ki kuch bhi changes krenge to original value mein change hoga
 * 
 */

// Example:
let myName = "Vishal Chauhan"
let anotherName = myName;

console.log(myName) // Vishal Chauhan
console.log(anotherName) // Vishal Chauhan

anotherName = "Vishal Singh";

console.log(myName) // Vishal Chauhan
console.log(anotherName) // Vishal Singh


let userOne = {
    email: "user@yopail.com",
    user: "user@ybl",
    city: "Pune"
}

let userTwo = userOne;

console.log(userOne, ">>> userOne"); // { email: 'user@yopail.com', user: 'user@ybl', city: 'Pune' }
console.log(userTwo, ">>userTwo"); // { email: 'user@yopail.com', user: 'user@ybl', city: 'Pune' }

userTwo.email = "userrrr@yopmail.com"; // userTwo change krte hi userOne bhi change ho jayega

console.log(userOne, ">>> userOne"); // { email: 'userrrr@yopmail.com', user: 'user@ybl', city: 'Pune' }
console.log(userTwo, ">>userTwo"); // { email: 'userrrr@yopmail.com', user: 'user@ybl', city: 'Pune' }