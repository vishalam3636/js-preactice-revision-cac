// Function means koi code jisko reuse kr skein, basically repeated code ka ek single package bana lena


function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}
// sayMyName();


// we'll make function to make something good
function add(num1, num2){
    console.log(num1 + num2);
}

add(); // NaN
add(2,5); // 7
add(2,"5"); // 25
add(2,null); // 2

const result = add(5,4);
console.log("result:", result); // result: undefined ,  becuase nothing is returned


function add2(num1, num2){
    let result= num1 + num2;
    return result;
}
console.log(add2(10, 20)); // 30




function loginUserMessage(username="John Doe"){ // default username
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }

    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} Just logged in !`
}
console.log(loginUserMessage("Vishal")); // Vishal Just logged in !
console.log(loginUserMessage()); // undefined




//+++++++++++++++++++ FUNCTIONS WITH OBJECTS +++++++++++++++//
// hume pata nahi ki kitni arguments aane wali hain, like add kret time hume pta tha ki 2 hi value aaa rhi hain. But in case hume nahi pta ki kitne arguments aane wale bhain, use case mein- 

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 800)); // 200, ab params pass krte jayenge to hume nahi pta ki kitne hain.


// solution: rest operator, sare passed params ko bundle up kr dega
function calculateCartPrice(...items){ 
    return items
}
console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]



const user = {
    username: "Vishal",
    price: 199,
    // prices: 199 
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user) // User name is Vishal and price is 199
handleObject({username: "Battery", price:399})


// a function that takes array and returns second value of array
const myNewArray = [200, 400, 600, 500];

function returnSecondValue(arr){
    return arr[1];
}
console.log(returnSecondValue(myNewArray)); // 400

