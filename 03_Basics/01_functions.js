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
// }

// const result = addTwoNumbers(3,7);  
// console.log("Result :",  result);  // Result : undefined


/*

function addTwoNumbers (number1, number2) {
      let result = number1 + number2
      return result
}
const result = addTwoNumbers(3,7);
console.log(result);   // 10

*/


function addTwoNumbers (number1, number2) {
      return  number1 + number2
}
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
}

// console.log(loginUserMessage("Raj Mishra"));
console.log(loginUserMessage());   //  undefined

// we can define same syntax in another way

function loginUserMessage(userName){
  if(userName === undefined){
       console.log("Please Enter a userName");  
       return
  }
  return `${userName} just logged In `
}

console.log(loginUserMessage("Raj Mishra"));   // Raj Mishra just logged In
// console.log(loginUserMessage());