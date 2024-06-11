// Array
/**
    -> Array is non-prinmitive (stored in Heap, so reference type)
    -> Array is an object where we can store collection of multiple items under a single variable name
    -> Can store mixed data type elements
    -> Access element using indexes
    -> Arrays do shallow copy, e.g;
        let arr = [1,2,3];
        let copyArr = arr;

        In above example, when we did copyArr = arr , it brought the same reference of arr

        // Shallow Copy
        Definition of "Shallow Copy" accroding to MDN-
            "A Shallow Copy of an object is a copy whose properties share the same refrences (point to the same underlying values) as those of the source object from which the copy was made"

        // Deep copy
        Definition of "Deep copy" accroding to MDN-
        A deep copy of na object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made.


    NOTE:
        // SLICE
    `   Slice method doesnt changes the original arr 
        and the last range dont gets included

        // SPLICE
        Splice method changes the original arr 
        and the last range gets inlcuded
*/

const myArr = [1,2,3,4,5];
const myHeroes = ["Shaktiman", "Naagraj"];

const myArr2 = new Array(1,2,3,"ram");
// console.log(myArr2); // [ 1, 2, 3, 'ram' ]

//===== Array Methods =======//
myArr.push(6);
// console.log(myArr); // [ 1, 2, 3, 4, 5, 6 ]
myArr.push(7);
// console.log(myArr); // [ 1, 2, 3, 4, 5, 6, 7 ]

myArr.pop();
// console.log(myArr); // [ 1, 2, 3, 4, 5, 6 ]

myArr.unshift(0);
// console.log(myArr); // [0, 1, 2, 3, 4, 5, 6 ]

myArr.shift();
// console.log(myArr); // [1, 2, 3, 4, 5, 6 ]


// console.log(myArr.includes(4)); // true
// console.log(myArr.includes(100)); // false

// console.log(myArr.indexOf(4)); // 3
// console.log(myArr.indexOf(100)); // -1 (negative one, as the element not exists)


const newArr = myArr.join();
// console.log(myArr, typeof myArr); // [ 1, 2, 3, 4, 5, 6 ] object
// console.log(newArr, typeof newArr); // 1,2,3,4,5,6 string

//++++ Slice And Splice +++++//
console.log("A", myArr); // [ 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(2, 4);
console.log("B", myArr); // [ 1, 2, 3, 4, 5, 6 ]
console.log(myn1); // [3, 4]

myn2 = myArr.splice(1,2);
console.log("C", myArr); // [ 1, 4, 5, 6 ]
console.log(myn2); // [2, 3]









