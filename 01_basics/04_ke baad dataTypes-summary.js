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