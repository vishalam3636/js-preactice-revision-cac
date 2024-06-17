const marvel_heroes = ["Thor", "Iron-Man", "Spider-Man"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// // Push
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // [ 'Thor', 'Iron-Man', 'Spider-Man', [ 'Superman', 'Flash', 'Batman' ] ]

// In above we node that we got array inside array
// so to get "flash", we'll have to do- marvel_heores[3][1], which is not right
// console.log(marvel_heroes[3][1]);


marvel_heroes.concat(dc_heroes);

console.log(marvel_heroes); // [ 'Thor', 'Iron-Man', 'Spider-Man' ], not worked, as concat dont change the original arr

// concat
let allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes); // [ 'Thor', 'Iron-Man', 'Spider-Man', 'Superman', 'Flash', 'Batman' ]

// spread operator
let allNewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allNewHeroes); // [ 'Thor', 'Iron-Man', 'Spider-Man', 'Superman', 'Flash', 'Batman' ]

// flat method
let anotherArray = [1,2,3,[4,5,6], 7, [6,7,[4,5]]];
const myRealAnotherArray = anotherArray.flat(Infinity)
console.log(myRealAnotherArray); // [1,2,3,4,5,6,7,6,7,4,5]


// isArray
console.log(Array.isArray("Vishal")); // false

// from
console.log(Array.from("Vishal")); // [ 'V', 'i', 's', 'h', 'a', 'l' ]
console.log(Array.from(123)); // []
console.log(Array.from("1")); // [ '1' ]
console.log(Array.from([1,2,3,4])); // [ 1, 2, 3, 4 ]
console.log(Array.from({name: "Vishal", age:28})); // [] (INTERESTING CASE FOR INTERVIEW)
console.log(Array.from(Object.keys({name: "Vishal", age:28}))); // [ 'name', 'age' ]
console.log(Array.from(Object.values({name: "Vishal", age:28}))); // [ 'Vishal', 28 ]


// of
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]




/**
 ********* SUMMARY **********
Mthods:
        1. Push (add elem to end of array)
                                    - Changes the original array

        2. Concat (merging two array)
                                    - Don't change the original array
                                    - Returns a new concatinated array

        3. Spread Operator (for merging two arrays)

        4. flat (for merging nested arrays)
                                    - returns a new array

        5. isArray (checks if the value is array)

        6. from (Creates an array from an iterable object.)
                                        NOTE: iterable objects like string and array.
                                               Rest like number, object pe empty array return krega

        7. of (Returns a new array from a set of elements.)
*/