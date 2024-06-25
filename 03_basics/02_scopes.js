// Three keywords- var, let and const
// curly braces i.e; {} is scope.
// {} comes with function, if-else

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

var c = 300;
let a = 500; // a in global scope

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40

    console.log(a, ">>inner"); // a in block scope
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 30 (problematic, as bahr nahi aana chahiye tha scope ke)
console.log(d); // 40 (problematic, as bahr nahi aana chahiye tha scope ke)


console.log(a); // 500


//++++++++++++++++++++++ Scope Level And Mini Hoisting In JS +++++++++++++++
// Block level scope
// Global Scope
// Nested Scoping
// how scoping works function inside function
// Closures

function one(){
    const username = "Vishal"

    function two(){
        const website = "netlify";
        console.log(username); // Vishal
    }
    // console.log(website); //ReferenceError: website is not defined

    two();
}
one()


if(true){
    const username = "vishal";
    if(username == "vishal"){
        const website = " Netlify";
        console.log(username + website); // vishal Netlify
    }

    // console.log(website); // ReferenceError: website is not defined
}
// console.log(username); // ReferenceError: username is not define


//======= interesting (function declaration and function expression, hoisting concept) ======//
addOne(5)
console.log(addOne(5)); // 6
function addOne(num){
    return num+1;
}
// addOne(5)


// addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization
console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2
}
// addTwo(5)

