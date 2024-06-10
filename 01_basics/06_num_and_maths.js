/*
const score = 200;
console.log(score);

const balance = new Number("100");
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100 stringed
console.log(balance.toString().length); // 2
console.log(balance.toFixed(2)); // 100.00


const otherNumber = 36.200796;

console.log(otherNumber.toPrecision()); // 36.200796
console.log(otherNumber.toPrecision(5)); // 36.201 (Kitni value pe focus krna hai and aage ke part pe round krta hai, number agr bada hai to exponent mein bhi krta hai)

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000 (US standard)
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 (Indian standard)


//====== Max and Min concept for cometitive programming, about Number data type ====//
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NaN); // NaN

*/

//+++++++++++++++++++++++++++++++ MATHS LIBRARY +++++++++++++++++++++++++//
console.log(Math); // Object [Math] {} (yaha oe print krte hain to detailed value nahi hai, detailed value ke liye browser ke console  mein kro)

console.log(Math.abs(-4)); // 4 (only minus ko plus mein krta hai)
console.log(Math.round(5.7)); // 6
console.log(Math.round(5.4)); // 5
console.log(Math.round(5.5)); // 6
console.log(Math.floor(5.7)); // 5
console.log(Math.ceil(5.2)); // 6

console.log(Math.sqrt(100)); // 10
console.log(Math.pow(2,4)); // 16 (2 ka power 4)

console.log(Math.min(5,2,7,9,1)); // 1
console.log(Math.max(5,2,7,9,1)); // 9
console.log(Math.max([1,2,3])); // NaN

console.log(Math.random()); // 0.31979356810188775 (gives random number, always changing)
console.log(Math.random()*10); // 9.850090309604491, 7.551134445650531, 0.18245980904234793 (zero bhi aa rhi hai)
console.log(Math.floor(Math.random()*10) + 1); // making sure in humesha 1 se ho and zero na ho so added 1, so 0-9 number ja rhi hai

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min); // 10-20 ke range mein number   

