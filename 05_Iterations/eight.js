const myNum = [1, 2, 3 , 4, 5];

// const myTotal = myNum.reduce(function (acc, currValue) {
//     console.log(`acc: ${acc} and currValue: ${currValue}`)
//     return acc + currValue
// }, 0);


// const myTotal = myNum.reduce( (acc, currValue) => acc + currValue, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "py Course",
        price : 999
    },
    {
        itemName : "JS Course",
        price : 1999
    },
    {
        itemName : "Mobile Dev Course",
        price : 2999
    },
];

const PriceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0);

console.log(PriceToPay);