let score = 35;
console.log(typeof score, ">>> score data type");

score = "33";
console.log(typeof score, ">>> reassigned score data type");


let valueNumber = Number(score);
console.log(typeof valueNumber, ">>> valueNumber i.e; score data type when score in Number");

score = "33abc";
valueNumber = Number(score);
console.log(typeof valueNumber, ">>> valueNumber i.e; score data type when score is 33abc and in Number");
console.log(valueNumber, ">>>> valueNumber when score is 33abc and in Number"); // NaN
console.log(typeof NaN, ">>> type of NaN") // number

//*********************************************************************************//

let score2 = null;
console.log(typeof score2, ">>> type of score2"); // object

let valNumber2 = Number(score2);
console.log(typeof valNumber2, ">>> valNumber2 i.e; score2 in Number"); // number
console.log(valNumber2, ">> valNumber2 value") // 0

//*********************************************************************************//

let score3 = undefined;
console.log(typeof score3, ">>> type of score3"); // undefined

let valNumber3 = Number(score3);
console.log(typeof valNumber3, ">>> valNumber3 i.e; score3 in Number"); // number
console.log(valNumber3, ">> valNumber3 value") // NaN

//*********************************************************************************//

let score4 = "Vishal";

console.log(typeof score4, ">>> type of score4");

let valNumber4 = Number(score4);
console.log(typeof valNumber4, ">>> type of valNumber4");
console.log(valNumber4, ">>> valNumber4 value");




/*
// NOTES:
    "33"  => 33
    "33abc" => NaN
    true => 1; false => 0
*/


let isLoggedIn = 0; // 1, 0, "", "vishal"

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn, ">>> booleanIsLoggedIn") // true

/*
 Truthy  Values: true, "Vishal", 1234, {}, [], Infinity, -Infinity
 Falsy Values:   false, "", 0, null, undefined, NaN
*/



let someNumber = 33;

console.log(typeof someNumber, ">>>> typeof someNumber"); // number

let numberToString = String(someNumber);
console.log(typeof numberToString, ">>>typeof numberToString"); // string


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