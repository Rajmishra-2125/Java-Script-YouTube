//  Premitive Datatypes

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

let Name = "Raj Mishra";   // String
const score = 100;         // Number
const IsLoggedIn = true;   // Boolean
const OutsideTem = null;   // Null
let UserEmail;             // Undefined
const id = Symbol('123');  // Symbol
let BigNumber = 23456722n; // BigInt



// Reference (Non-Premitive) Datatypes

// Array, Objects, Functions

const SuperHero = ['Thor', 'IronMan', "Captain America"]          // Array

let persons = {
        name : "Raj Mishra",
        Age  : 22
}                                                                // Objects

const MyFunction = function(){
    console.log("Hii, Raj Mishra");
}                                                               // Function

console.log(typeof BigNumber);


//  Link for read about Typeof : https://262.ecma-international.org/5.1/#sec-11.4.3




// +++++++++++++++++++++++++++++++++++  Memory  +++++++++++++++++++++++++++++++++++++++ //

//   Stack(Primitive), Heap Memory(Non-Primitive)


let MyInstaName = "@rajmishra5053";
let anotherInstaName = MyInstaName;
anotherInstaName = "@rajmishra.50364";

console.log(MyInstaName);
console.log(anotherInstaName);

let User1 = {
    Nmae : "Raj Mishra",
    Email : "mraj94759@gmail.com"
}

let User2 = User1;
User2.Email = "raj212558@gmail.com";

console.log(User1);
console.log(User2);



