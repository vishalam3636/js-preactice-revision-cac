// Singleton: Means, koi bhi object jo Constructor se banate hain to Singleton object banta hai. Matlab ki ye apni trh ka ek hi object hai. Lekin jab dusre trh se bnate hain to uske multiple instances ban jate hain. 
// Literals ki trh declare krne se singleton nahi banta hai, constructor se singleton banta hai.
// Constructor method, mtlb Object.create() use kr ke 

let jsUser = {
    name: "Vishal",
    "full name": "Vishal Chauhan",
    age: 18,
    location: "Kanpur",
    email: "visal@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing object
console.log(jsUser.email); // visal@google.com
console.log(jsUser["email"]); // visal@google.com (accepts an string)
console.log(jsUser["full name"]); // Vishal Chauhan (is dot se access kr hi nahi skenge)
                







/*
    NOTES:
    => There are three ways to create Obejct in js.
                                            1. Literal
                                            2. Construction function
                                            3. Object.create
*/