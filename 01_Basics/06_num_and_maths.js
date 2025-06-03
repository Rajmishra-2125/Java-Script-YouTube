const score = 200;
console.log(score);

const Balance = new Number(100);
console.log(Balance);

console.log(Balance.toString().length);
console.log(Balance.toFixed(2));

const otherNumber = 23.8342;

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;

console.log(hundreds.toLocaleString('en-IN'));


// ****************************  Maths  *************************************** //


console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(4.9));
console.log(Math.ceil(8.2));
console.log(Math.floor(8.8));
console.log(Math.min(8,4, 5, 9));
console.log(Math.max(9, 7, 3, 2));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Maths.floor((Math.random()*10) + 1));



//  with help of this we may create Otp Generator

const min = 100000;
const max = 999999;

console.log(Math.floor(Math.random() * (max - min + 1))+ min);





