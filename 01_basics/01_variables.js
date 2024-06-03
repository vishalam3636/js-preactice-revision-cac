const accountId = 144553;
let accountEmail = "vishal@yopmail.com";
var accountPassword = "12345";
accountCity = "Kanpur";
let accountState;

//========= changing each values ========//
// accountId = 2;
// console.log(accountId, ">>> accountId changed"); // TypeError: Assignment to constant variable.


accountEmail = "vc@yopmail.com";
console.log(accountEmail, ">>> accountEmil changed"); // changed

accountPassword = "1111111";
console.log(accountPassword, ">>>> account password changed"); // changed

accountCity = "Pune";
console.log(accountCity, ">>> account city changed") // changed


console.table([accountId, accountEmail, accountPassword, accountCity, accountState, ">>>> all in one console"])




/*
    Prefer not to use var
    Because of issue in block scope and functional scope
*/

/**
 ************** DIFFERENCE BETWEEN let, var, and const **************

 Var: 
    -> funcional scope
    -> hoisted to the top of their scope and we can be used before declaration, but will give value "undefined" untill the declaration is encountered.
    -> can be re-assigned

 Let:
    -> Block Scope
    -> hoisted to the top of their "BLOCK SCOPE" but are not initialized. Accessing them before declaration gives "reference error"
    -> Can be reassigned

 Const:
    -> Block Scope
    -> hoisted to the top of their "BLOCK SCOPE" but are not initialized. Accessing them before declaration gives "reference error"
    -> cannot be re-assigned. If the variable is an object or array, the constants can be modified.

 */