const user = {
    userName : "Raj Mishra",
    Price : 1999,

    welcomeMessage : function(){
       console.log(`${this.userName}, Welcome To The Website`);   //  Raj Mishra, Welcome To The Website
       console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "Rajan";
// user.welcomeMessage();

// console.log(this);    // {}


//  we can't use this function directly if we declare a function like:

// function chai(){
//     let userName = "Raj Mishra"
//     console.log(this);
//     console.log(this.userName);
// };
// chai();





//  +++++++++++++++++++++++ Arrow Functions +++++++++++++++++++++++++++++


const chai = () => {
    let userName = "Raj Mishra"
    // console.log(this);        //  {}
    // console.log(this.userName);  // undefined
};
chai();


// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwoNumbers(5, 7));  // 12

// const addTwoNumbers = (num1, num2) => num1 + num2;     // this is right syntax

// const addTwoNumbers = (num1, num2) => (num1 + num2);  // Also, this is right syntax

// console.log(addTwoNumbers(13, 17));  // 30

const addTwoNumbers = (num1, num2) => ({userName : "Raj Mishra"});
console.log(addTwoNumbers(10, 20));  //  { userName: 'Raj Mishra' }