// const tinderUser = new Object(); // singleton object
const tinderUser = {}; // non singleton object
console.log(tinderUser); // both will print {}

tinderUser.id = "!23abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // { id: '!23abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Vishal",
      lastName: "Chauhan",
    },
  },
};
console.log(regularUser.fullName.userFullName.firstName); // Vishal
// optional chaining
// console.log(regularUser.fullName.usersFullName.firstName); // code fatega with error: TypeError: Cannot read properties of undefined (reading 'firstName')
console.log(regularUser?.fullName?.usersFullName?.firstName); // undefined , code nahi fatega, as usersFullName is undefined and its falsy so aage nahi badhega, wahin se undefined return kar dega

// Combining objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// let obj3 = {obj1, obj2};
// console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } } // same arrya wali problem hai ye to

// const obj3 = Object.assign(obj1, obj2); // sari values object1 mein ja ri hain
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = Object.assign({},obj1, obj2); // first is target and others is source, first mein sab aayenge
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// spred operator
const obj3 = {...obj1, ...obj2};
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {id:1, email:"a@yopmail.com"},
    {id:2, email:"b@yopmail.com"},
    {id:3, email:"c@yopmail.com"},
    {id:4, email:"d@yopmail.com"},
    {id:5, email:"e@yopmail.com"}
]

users[0].email // a@yopmail.com

console.log(tinderUser); // { id: '!23abc', name: 'Sammy', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '!23abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '!23abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
console.log(tinderUser.hasOwnProperty("loggedIn")); // false


//++++++++++++++++++++++++++++ OBJECT DESTRUCTURING +++++++++++++++++++//
const course = {
  courseName: "JS in hindi",
  price: "999",
  courseInstructor: "Vishal"
}

console.log(course.courseName);
console.log(course.price);
console.log(course.courseInstructor);

const {courseInstructor: instuctor} = course; // destructuring object
// console.log(courseInstructor); // Vishal
console.log(instuctor); // Vishal


//== APIs Concept ==//
// JSON structure (curly brackets mein , keys in string, API ke responses aise hi aate hain)

// {
//   "name": "Vishal",
//   "courseName": "JS Practice",
//   "price": "free"
// }























