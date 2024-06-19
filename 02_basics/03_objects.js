// Singleton: Means, koi bhi object jo Constructor se banate hain to Singleton object banta hai. Matlab ki ye apni trh ka ek hi object hai. Lekin jab dusre trh se bnate hain to uske multiple instances ban jate hain. 
// Literals ki trh declare krne se singleton nahi banta hai, constructor se singleton banta hai.
// Constructor method, mtlb Object.create() use kr ke 


let mySym = Symbol("key1");

let jsUser = {
    name: "Vishal",
    "full name": "Vishal Chauhan",
    // mySym: "mykey1", // symbol ki trh use nahi ho rha hai, string ki trh use ho rha hai
    [mySym] : "mykey1",
    age: 18,
    location: "Kanpur",
    email: "visal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// accessing object
console.log(jsUser.email); // visal@google.com
console.log(jsUser["email"]); // visal@google.com (accepts an string)
console.log(jsUser["full name"]); // Vishal Chauhan (is dot se access kr hi nahi skenge)

console.log(jsUser[mySym]); // mykey1, symbol is accessed in sq bkts
console.log(typeof(jsUser[mySym]));

// changing value
jsUser["email"] = "vishal@yahoo.in";
console.log(jsUser);


// // freezing object
// Object.freeze(jsUser);
// jsUser["email"] = "Madhur@yahoo.in"; // email wont change, as we have freezed the object
// console.log(jsUser); 


// adding function to object
jsUser.greeting = function(){
    console.log("Hello JS user !!!");
}
jsUser.greeting(); // Hello JS user !!!


jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name} !!`); // this referest to the parent object
}
jsUser.greetingTwo(); // Hello JS user, Vishal !! 




/*
    NOTES:
    => There are three ways to create Obejct in js.
                                            1. Literal
                                            2. Construction function
                                            3. Object.create
*/