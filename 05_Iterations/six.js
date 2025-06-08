// const coding = ["js", "java", "python", "c++"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// });   

// console.log(values); //   does not return anything bcoz this type of coding syntax did not  run 

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNum.filter( (num) => num > 4);

// console.log(newNums);


// const newNum = myNum.filter( (num) => {
//     return  num > 4;
// });

// console.log(newNum);

const newNum1 = [];

myNum.forEach( (num) => {
    if (num > 4) {
        newNum1.push(num);
    };
});

// console.log(newNum1);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    { title: 'Book Six', genre: 'History', publish: 1987, edition: 2010},
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
]

let userBooks = books.filter( (bk) => bk.genre === 'History');

let userBooks1 = books.filter( (bk) => { return bk.publish >= 1995});

let userBooks2 = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === 'History';
});

console.log(userBooks2);