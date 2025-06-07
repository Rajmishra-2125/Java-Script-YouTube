const userEmail = [];

if (userEmail){
    console.log("Got user Email");      // Got user Email
}else{
    console.log("don't have user Email");
}

// Falsy values
 
//  false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truely Values

// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0 ){
    console.log("Array is empty");      // Array is empty
};

const emptyObject = {};

if (Object.keys(emptyObject).length === 0){
    console.log("Object is empty");         // Object is empty
}


// Nullish Coalescing Operator (??) : null undefined

let val1 ;

// val1 = 5 ?? 10;         // 5
// val1 = null ?? 15;      //15
// val1 = undefined ?? 20;             // 20
// val1 = null ?? 20 ?? 30;            // 20

console.log(val1);



//  Terniary Operation

// Condition ? true : False

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");   // more than 80