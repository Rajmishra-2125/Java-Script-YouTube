/*
function SayMyName() {
    console.log("h");
    console.log("i");
    console.log(",");
    console.log(" ");
    console.log("R");
    console.log("a");
    console.log("j");
}
SayMyName();
*/




// function addTwoNumbers (number1, number2) {
//     // console.log(number1 + number2);   // 10
// };

// const result = addTwoNumbers(3,7);  
// console.log("Result :",  result);  // Result : undefined


/*

function addTwoNumbers (number1, number2) {
      let result = number1 + number2
      return result
};
const result = addTwoNumbers(3,7);
console.log(result);   // 10

*/


function addTwoNumbers (number1, number2) {
      return  number1 + number2
};
const result = addTwoNumbers(3,7);
// console.log(result);

// console.log("Result :",  result);  // Result : 10


// this syntax is mostly used in programming

function loginUserMessage(userName){
  if(!userName){
       console.log("Please Enter a userName");  //  Please Enter a userName
       return
  }
  return `${userName} just logged In `
};

// console.log(loginUserMessage("Raj Mishra"));
// console.log(loginUserMessage());   //  undefined

// we can define same syntax in another way

function loginUserMessage(userName){
  if(userName === undefined){
       console.log("Please Enter a userName");  
       return
  }
  return `${userName} just logged In `
};

// console.log(loginUserMessage("Raj Mishra"));   // Raj Mishra just logged In
// console.log(loginUserMessage());



/* ++++++++++++++++++++++++++++++++++++ Functions with Objects ++++++++++++++++++++++++++ */

// function calculateCartPrice(num1){
//    return num1
// };

// console.log(calculateCartPrice(2));



function calculateCartPrice(...num1){
   return num1
};

// console.log(calculateCartPrice(200, 400, 800, 2000));   // [ 200, 400, 800, 2000 ]

const user = {
  userName : "Raj Mishra",
  price : 199
};

function handleObjects(anyObjects){
   console.log(`UserName is ${anyObjects.userName} and price is ${anyObjects.price}`);
} ;

// handleObjects(user);  // UserName is Raj Mishra and price is 199
handleObjects({userName: "Rajan", price: 1999});  // UserName is Rajan and price is 1999


/* ++++++++++++++++++++++++++++++++++++ Functions with Arrays ++++++++++++++++++++++++++ */


const myNewArray = [200, 300, 400, 2000];

function getNewArray(anyArray){
      return anyArray[1]  
};

// console.log(getNewArray(myNewArray));    // 300
console.log(getNewArray([200, 400, 700, 1000]));  // 400