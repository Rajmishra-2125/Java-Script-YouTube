// for of 

//  ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
};

const greetings = "Hello World";

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
};

//  Maps

const map = new Map();
map.set('IN', "India");
map.set('USA', "United State America");
map.set('FR', "France");

// console.log(map);      // Map(3) {
//                                 'IN' => 'India',
//                                 'USA' => 'United State America',
//                                 'FR' => 'France'
//                                }


for (const region of map) {
[ 'FR', 'France' ]
    console.log(region);   // [ 'IN', 'India' ] [ 'USA', 'United State America' ] [ 'FR', 'France' ]
}


for (const [region, value] of map) {
    console.log(region, ':-', 'value');}      // IN :- value
                                             // USA :- value
                                             // FR :- value

const myObject = {
    'Game1': 'Free Fire',
    'Game2': 'PUBG',
    'Game3': 'CoD'
}

// for (const [element, value] of myObject) {
//     console.log(region, ':-', 'value');        // we can't iterate object by this method 
// }