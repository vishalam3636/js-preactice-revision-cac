let score = 35;
// console.log(typeof score, ">>> score data type"); //number

score = "33";
// console.log(typeof score, ">>> reassigned score data type"); // string


let valueNumber = Number(score);
// console.log(typeof valueNumber, ">>> valueNumber i.e; score data type when score in Number"); // number

score = "33abc";
valueNumber = Number(score);
// console.log(typeof valueNumber, ">>> valueNumber i.e; score data type when score is 33abc and in Number"); // number
// console.log(valueNumber, ">>>> valueNumber when score is 33abc and in Number"); // NaN
// console.log(typeof NaN, ">>> type of NaN") // number

//*********************************************************************************//

let score2 = null;
// console.log(typeof score2, ">>> type of score2"); // object

let valNumber2 = Number(score2);
// console.log(typeof valNumber2, ">>> valNumber2 i.e; score2 in Number"); // number
// console.log(valNumber2, ">> valNumber2 value") // 0

//*********************************************************************************//

let score3 = undefined;
// console.log(typeof score3, ">>> type of score3"); // undefined

let valNumber3 = Number(score3);
// console.log(typeof valNumber3, ">>> valNumber3 i.e; score3 in Number"); // number
// console.log(valNumber3, ">> valNumber3 value") // NaN

//*********************************************************************************//

let score4 = "Vishal";

// console.log(typeof score4, ">>> type of score4"); // string

let valNumber4 = Number(score4);
// console.log(typeof valNumber4, ">>> type of valNumber4"); // number
// console.log(valNumber4, ">>> valNumber4 value"); // NaN




/*
// NOTES:
    "33"  => 33
    "33abc" => NaN
    true => 1; false => 0
*/


let isLoggedIn = 0; // 1, 0, "", "vishal"

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn, ">>> booleanIsLoggedIn") // true

/*
 Truthy  Values: true, "Vishal", 1234, {}, [], Infinity, -Infinity
 Falsy Values:   false, "", 0, null, undefined, NaN
*/



let someNumber = 33;

// console.log(typeof someNumber, ">>>> typeof someNumber"); // number

let numberToString = String(someNumber);
// console.log(typeof numberToString, ">>>typeof numberToString"); // string


/*
    // Falsy Examples
    if (false) console.log('Falsy');
    if (0) console.log('Falsy');
    if (-0) console.log('Falsy');
    if (0n) console.log('Falsy');
    if ("") console.log('Falsy');
    if (null) console.log('Falsy');
    if (undefined) console.log('Falsy');
    if (NaN) console.log('Falsy');

        // Truthy Examples
    if (true) console.log('Truthy'); // "Truthy"
    if (1) console.log('Truthy'); // "Truthy"
    if (-1) console.log('Truthy'); // "Truthy"
    if ("hello") console.log('Truthy'); // "Truthy"
    if (" ") console.log('Truthy'); // "Truthy"
    if ({}) console.log('Truthy'); // "Truthy"
    if ([]) console.log('Truthy'); // "Truthy"
    if (function() {}) console.log('Truthy'); // "Truthy"
    if (Infinity) console.log('Truthy'); // "Truthy"
    if (-Infinity) console.log('Truthy'); // "Truthy"
    if (1n) console.log('Truthy'); // "Truthy"
    if (new Date()) console.log('Truthy'); // "Truthy"
    if (/regex/) console.log('Truthy'); // "Truthy"
*/



//********************************************************************************/
//********************************* OPERATIONS ***********************************/
//********************************************************************************/
let value = 3;
let negValue = -value;
// console.log(negValue) // -3


// console.log(2+2); // 4
// console.log(2-2); // 0
// console.log(2*2); // 4
// console.log(2**3); // 8
// console.log(2/3); // 0.666666
// console.log(2%3); // 2

let str1 = "Vishal";
let str2 = " Singh";
let str3 = str1 + str2;
// console.log(str3);

// console.log(1+"2") // 12
// console.log("1" + 2) // 12
// console.log("1" + "2"); // 12

// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2"); // 32
// console.log(3 + 4 * 5 % 3); // should not this kind of messy code. always enclosed in prper parenthisis

/**
    NOTE: 
        agr pehla string hai to sab ko string treat kiya jayega
        agr pehle number hai aur last mein string hai to last mein string treat hoga
*/

console.log(true);
console.log(+true); // 1, as true is boolean and cnverting it to number. But ye code is not good. code should be simple
console.log(+""); // 0, as empty string is falsy and + lagane se number mein convert ho ke 0 milega

let num1, num2, num3;
num1 = num2 =  num3 = 2 + 2
console.table([num1, num2, num3]); // 4 4 4


let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101

++gameCounter;
console.log(gameCounter); // 102


// Increment++ (NOTE: Learn more about pre and post incement)
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`); // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`); // Expected output: "a:4, b:4"
