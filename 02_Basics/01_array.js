// Arrays

const arr = [0, 1, 2, 4, 5];
const superHeros = ["Thor", "IronMan", "Captain America"];

// console.log(arr[2]);       // 2

const arr2 = new Array (1, 2, 3, 4, 5, 6, 7);
// console.log(arr2[0]);       // 1



// *********************  Methods in Arrays  ************************ //


//  to add any element

arr.push(9);  
// console.log(arr);     // [ 0, 1, 2, 4, 5, 9 ]


//  to remove last element in arr 

arr.pop();
// console.log(arr);     // [ 0, 1, 2, 4, 5 ]


//  to add a element on first of an array

arr.unshift(9);
// console.log(arr);     // [ 9, 0, 1, 2, 4, 5 ]


//   to remove that element that was added by using unshift

arr.shift();
// console.log(arr);     // [ 0, 1, 2, 4, 5 ]


//  to know a given element exist or not 

// arr.includes(9);    // this give answer boolean like : true/false 
// console.log(arr.includes(9));     // False
 

//  to know the index of an element 

// console.log(arr.indexOf(2));     // 2
// if we give a value that doesnot exist then we get -1 this means I don't know


// if we connect a new array with an existing array by using join  then the new array become a string

const newArr = arr.join(); 

// console.log(newArr);       //  0,1,2,4,5
// console.log(typeof newArr);     // string



// *********************  Slice and Splice in Arrays  ************************ //

const arr1 = ["Raj", "Rishu", "Neha", "Rajan", "Radha", "Riya"];
console.log("A " , arr1);            // A  [ 'Raj', 'Rishu', 'Neha', 'Rajan', 'Radha', 'Riya' ]


const myNewArr1 = arr1.slice(1, 3);
const myNewArr2 = arr1.splice(1, 3);

console.log("B " , myNewArr1);        // B  [ 'Rishu', 'Neha' ]
console.log("C " , myNewArr2);       //  C  [ 'Rishu', 'Neha', 'Rajan' ]
console.log("d " , arr1);            //  d  [ 'Raj', 'Radha', 'Riya' ]