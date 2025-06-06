const tinderUser1 = new Object();
// console.log(tinderUser1); // {}

const tinderUser2 = {};
tinderUser2.id = "144";
tinderUser2.name = "Raj Mishra";
tinderUser2.IsLoggedIn = true;

// console.log(tinderUser2);  // { id: '144', name: 'Raj Mishra', IsLoggedIn: true }


 const regularUser = {
    email : "raj212558@gmail.com",
    FullName : {
        userFullName : {
            FirstName : "Rajan",
            LastNAme : " Mishra"
        }
    }
 }

// console.log(regularUser.FullName.userFullName.FirstName);  // Rajan

const obj1 = {1: "a", 2: "b" };
const obj2 = {3: "a", 4: "b" };
const obj3 = {5: "a", 6: "b" };

// const obj4 = {obj1, obj2 };
// const obj4 = Object.assign({}, obj1, obj2, obj3);

// console.log(obj4);  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//  Spread Type of printing

const obj5 = {...obj1, ...obj2, ...obj3};

// console.log(obj5);   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const users = [
    {
        
    },
    {
        id: 123,
        email: "rajan212558@gmail.com"
    }
];

users[1].email;
// console.log(tinderUser2);  // { id: '144', name: 'Raj Mishra', IsLoggedIn: true }

console.log(Object.keys(tinderUser2));  // [ 'id', 'name', 'IsLoggedIn' ]
console.log(Object.values(tinderUser2));  // [ '144', 'Raj Mishra', true ]
console.log(Object.entries(tinderUser2));  // [ [ 'id', '144' ], [ 'name', 'Raj Mishra' ], [ 'IsLoggedIn', true ] ]

console.log(tinderUser2.hasOwnProperty('IsLoggedIn'));  // true
