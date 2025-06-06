/* writing code at any where which is not in any bracets that is global scope */

// var c = 300; 

/* writing code at this {} bracets that is local scope */

let a = 200;

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ", a);      // Inner:  10
}

// console.log(a);  // geting error in syntax
// console.log(b);  // geting error in syntax
// console.log(c);  // 30 /* this is the reason why we can't use var mostly in programming 

// console.log(a);  // 200



function one(){
    const userNames = "Raj Mishra"
    function two(){
        const websites = "YouTube"
        console.log(userNames)
    }
    // console.log(websites);
    two()
};
// one();

if(true){
   const userName = "Raj"
   if(userName === "Raj"){
    const website = " Facebook"
    console.log(userName + website);   // Raj Facebook
   }
//    console.log(website);
}
// console.log(userName);


//  ***************************** Interseing points **********************************

addOne();
console.log(addOne(5));  // 6

function addOne(num){
    return num + 1
};


const addTwo = function(num){
    return num + 2
};
addTwo();
console.log(addTwo(8));    // 10