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


