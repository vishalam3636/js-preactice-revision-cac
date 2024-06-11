const marvel_heroes = ["Thor", "Iron-Man", "Spider-Man"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes); // [ 'Thor', 'Iron-Man', 'Spider-Man', [ 'Superman', 'Flash', 'Batman' ] ]

// In above we node that we got array inside array
// so to get "flash", we'll have to do- marvel_heores[3][1], which is not right
// console.log(marvel_heroes[3][1]);


marvel_heroes.concat(dc_heroes);

console.log(marvel_heroes); // [ 'Thor', 'Iron-Man', 'Spider-Man' ], not worked, as concat dont change the original arr

let concatDcAndMarvel = marvel_heroes.concat(dc_heroes);
console.log(concatDcAndMarvel); // [ 'Thor', 'Iron-Man', 'Spider-Man', 'Superman', 'Flash', 'Batman' ]