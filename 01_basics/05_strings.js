const name = "Vishal Singh Chauhan";
const score = 28;

console.log(name + score + " Score") // outdated way

// Using backticks, yaha pe aata hai String Interpolation
console.log(`Hello my name is ${name} and i score ${score} in the game !`);

// another way of declaring string, it creates an Object
const newName = new String('Vishalsc');
console.log(newName);
console.log(typeof newName); // object, it has all the string methods, we can check in browsers console

// Using String Methods:
console.log(newName[0]); // V
console.log(newName[1]); // i

console.log(newName.__proto__); // {}

console.log(newName.length); // 8

console.log(newName.toUpperCase()); // VISHALSC

console.log(newName.charAt(3)); // h (returns character at index 3)












