const accountId = 123;
let accountEmail = "mraj94759@gmail.com";
var accountPassword = 2005;
accountCity = "Utter Pradesh"

//  changing the values of all of the following

// accountId = 75;        //  we can't change value on consts  
accountCity = "Bihar";
accountEmail = "raj212558@gmail.com";
accountPassword = 274602


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountCity, accountPassword]);

