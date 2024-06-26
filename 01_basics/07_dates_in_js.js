// Go to MDN Date in js and read doc

let myDate = new Date();

console.log(myDate); // 2024-06-10T11:58:16.507Z
console.log(myDate.toString()); // Mon Jun 10 2024 11:58:50 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Mon Jun 10 2024
console.log(myDate.toLocaleString()) // 6/10/2024, 12:04:04 PM

console.log(typeof myDate); // object

console.log(myDate.toISOString()); // 2024-06-10T12:00:12.181Z
console.log(myDate.toLocaleDateString()); // 6/10/2024
console.log(myDate.toJSON()); // 2024-06-10T12:04:36.615Z


let myCreatedDate = new Date(2024, 0, 23);
console.log(myCreatedDate); // 2024-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // Tue Jan 23 2024 (NOTE: months in JS starts with 0, 0 is jan)

let myCreatedDate2 = new Date(2024, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // 1/23/2024, 5:03:00 AM

let myCreatedDateCustomFormat = new Date("2024-01-20");
console.log(myCreatedDateCustomFormat.toLocaleString()); // 1/20/2024, 12:00:00 AM (yy-mm-dd)

let myCreatedDateCustomFormat2 = new Date("01-20-2024");
console.log(myCreatedDateCustomFormat2.toLocaleString()); // 1/20/2024, 12:00:00 AM


let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1718095581132 (millieconds passed since 01 jan 1970)

console.log(myCreatedDate.getTime()); // 1705968000000

console.log(Math.round(Date.now()/1000)); // 1718095739 (in seconds)

let newDate = new Date();
console.log(newDate); // 2024-06-11T08:49:47.165Z
console.log(newDate.getMonth() + 1); // 6 (current month, added 1 because month strts with 0)
console.log(newDate.getDay()); // 2


// // we can do more customization in below way using localeString
// newDate.toLocaleString("default", {
//     weekday: "long",
//     timeZone: "en-IN"
// })