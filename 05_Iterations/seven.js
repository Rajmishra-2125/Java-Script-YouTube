const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNumbers = myNumbers.map( (num) => num + 10);
// const myNewNumbers1 = myNumbers.map( (num) => {return  num + 10});

// console.log(myNewNumbers);
// console.log(myNewNumbers1);

const myNum = myNumbers.map( (num) => num * 10)
                       .map( (num) => num + 4)
                       .filter( (num) => num >= 40);

console.log(myNum);