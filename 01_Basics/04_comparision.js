// console.log(2 > 0);
// console.log(6 >= 0);
// console.log(3 < 0);
// console.log(4 == 0);
// console.log(1 != 0);


// console.log("2" > 0);
// console.log("02" > 0);
// console.log(null >= 0);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null → O is false.

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// "===" This will not check the value this is also check its datatypes Like:

console.log("02" === 2)