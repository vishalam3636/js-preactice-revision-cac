const name = "Vishal Singh Chauhan";
const score = 28;

console.log(name + score + " Score") // outdated way

// Using backticks, yaha pe aata hai String Interpolation
console.log(`Hello my name is ${name} and i score ${score} in the game !`);

// another way of declaring string, it creates an Object
const newName = new String('Vishal-sc');
console.log(newName);
console.log(typeof newName); // object, it has all the string methods, we can check in browsers console

// Using String Methods:
console.log(newName[0]); // V
console.log(newName[1]); // i

console.log(newName.__proto__); // {}

console.log(newName.length); // 8

console.log(newName.toUpperCase()); // VISHALSC

console.log(newName, '>>>> newName') // original value change nahi hui, as its Primitive data type

console.log(newName.charAt(3)); // h (returns character at index 3)

console.log(newName.indexOf("s")); // 2

let newString = newName.substring(0, 4)
console.log(newString); // Vish

let anotherString = newName.slice(0, 4);
console.log(anotherString); // Vish

let newStringOne = "   Vishal     ";
console.log(newStringOne); //     Vishal    
console.log(newStringOne.trim()); // Vishal (removes spaces)

let url = "https://github.com/vishalam3636/js%20-preactice-revision-cac";
console.log(url.replace("%20", "")) // https://github.com/vishalam3636/js-preactice-revision-cac

console.log(url.includes("vishal")); // true
console.log(url.includes("vishalll")); // false

let strArr = newName.split("");
console.log(strArr); //  ['V','i','s','h','a','l','-','s','c']

strArr = newName.split("-");
console.log(strArr); // [ 'Vishal', 'sc' ]

strArr = newName.blink();
console.log(strArr); // <blink>Vishal-sc</blink>



