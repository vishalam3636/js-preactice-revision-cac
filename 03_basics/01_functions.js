// Function means koi code jisko reuse kr skein, basically repeated code ka ek single package bana lena


function sayMyName(){
    console.log("V");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}
// sayMyName();


// we'll make function to make something good
function add(num1, num2){
    console.log(num1 + num2);
}

add(); // NaN
add(2,5); // 7
add(2,"5"); // 25
add(2,null); // 2

const result = add(5,4);
console.log("result:", result); // result: undefined ,  becuase nothing is returned


function add2(num1, num2){
    let result= num1 + num2;
    return result;
}
console.log(add2(10, 20)); // 30




function loginUserMessage(username="John Doe"){ // default username
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;
    // }

    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} Just logged in !`
}
console.log(loginUserMessage("Vishal")); // Vishal Just logged in !
console.log(loginUserMessage()); // undefined









