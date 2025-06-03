const Name = "Raj Mishra";
const Age = 22;

// console.log(Name + Age + "BCA at DDUGU");


console.log(`Hello, My Name is ${Name} and my age is ${Age}`);

const GameName = new String('Not-Important-To-Me');

const newString = GameName.substring(0 , 5);
console.log(newString);


const anotherString = GameName.slice(-8 , 5);
console.log(anotherString);


const newStringOne = "  Raj Mishra  ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://rajmishra.com/raj%20mishra";

console.log(url.replace('%20', '-'));
console.log(url.includes("Sunder"));



console.log(GameName[0]);
console.log(GameName.__proto__);


console.log(GameName.length);
console.log(GameName.toUpperCase());
console.log(GameName.charAt(2));
console.log(GameName.indexOf('t'));
console.log(GameName.split('-'));


// ++++++++++++++++++++++++++++++ more About Strings Explored By Raj Mishra  +++++++++++++++++++++++++++++++++ //


// string.at()

const array1 = [5, 12, 8, 130, 44];

let index = 2;
console.log(`An index of ${index} returns ${array1.at(index)}`);    // Expected output: "An index of 2 returns 8"
index = -2;
console.log(`An index of ${index} returns ${array1.at(index)}`);   // Expected output: "An index of -2 returns 130"

// string.concat()


const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];
const array4 = array2.concat(array3);

console.log(array4);                     // Expected output: Array ["a", "b", "c", "d", "e", "f"]


// string.copuWithin

const array5 = ["a", "b", "c", "d", "e"];

console.log(array5.copyWithin(0, 3, 4));              // Expected output: Array ["d", "b", "c", "d", "e"]
console.log(array5.copyWithin(1, 3));                // Expected output: Array ["d", "d", "e", "d", "e"]

// string.entries

const iterator1 = array2.entries();

console.log(iterator1.next().value);                   // Expected output: Array [0, "a"]
console.log(iterator1.next().value);                   // Expected output: Array [1, "b"]


// string.every

const isBelowThreshold = (currentValue) => currentValue < 40;
const array6 = [1, 30, 39, 29, 10, 13];
console.log(array6.every(isBelowThreshold));       // Expected output: true


// string.fill

const array7 = [1, 2, 3, 4];            // Fill with 0 from position 2 until position 4
console.log(array7.fill(0, 2, 4));     // Expected output: Array [1, 2, 0, 0]

// string.filter

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const result = words.filter((word) => word.length > 6);
console.log(result);        // Expected output: Array ["exuberant", "destruction", "present"]

// string.find

const array8 = [5, 12, 8, 130, 44];
const found1 = array8.find((element) => element > 10);
console.log(found1);         // Expected output: 12

// string.findIndex

const array9 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array9.findIndex(isLargeNumber));     // Expected output: 3

// string.findLast

const array10 = [5, 12, 50, 130, 44];
const found2 = array1.findLast((element) => element > 45);
console.log(found2);         // Expected output: 130

// string.findLastIndex

const array11 = [5, 12, 50, 130, 44];

const isLargeNumber1 = (element) => element > 45;

console.log(array11.findLastIndex(isLargeNumber1));    // Expected output: 3
// Index of element with value: 130

// string.flat

const arr12 = [0, 1, 2, [3, 4]];
console.log(arr12.flat());         // expected output: Array [0, 1, 2, 3, 4]

// string.flatMap

const arr13 = [1, 2, 1];
const result1 = arr13.flatMap((num) => (num === 2 ? [2, 2] : 1));
console.log(result1);          // Expected output: Array [1, 2, 2, 1]

// string.forEach

const array14 = ["a", "b", "c"];
array14.forEach((element) => console.log(element));        // Expected output: "a", "b", "c"

// string.includes

const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));         // Expected output: true


// string.indexOf

const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));       // Expected output: 1

// string.join

const elements = ["Fire", "Air", "Water"];
console.log(elements.join());        // Expected output: "Fire,Air,Water"

// string.keys

const array15 = ["a", "b", "c"];
const iterator = array15.keys();
for (const key of iterator) {
  console.log(key);                   // Expected output: 0, 1, 2
}                     


// string.lastIndexOf

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals.lastIndexOf("Dodo"));         // Expected output: 3

// string.map

const array16 = [1, 4, 9, 16];           // Pass a function to map
const map1 = array16.map((x) => x * 2);
console.log(map1);                      // Expected output: Array [2, 8, 18, 32]

// string.pop

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());          // Expected output: "tomato"
plants.pop();

// string.push

const animals1 = ["pigs", "goats", "sheep"];
const count = animals1.push("cows");
console.log(count);            // Expected output: 4

// string.reduce

const array17 = [1, 2, 3, 4];         // 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array17.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);         // Expected output: 10

// string.reduceRight and string.concat

const array18 = [
  [0, 1],
  [2, 3],
  [4, 5],
];

const result2 = array18.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue),
);

console.log(result2);         // Expected output: Array [4, 5, 2, 3, 0, 1]

// string.reverse

const array19 = ["one", "two", "three"];
console.log("array19:", array19);         // Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array19.reverse();
console.log("reversed:", reversed);      // Expected output: "reversed:" Array ["three", "two", "one"]

// string.shift

const array20 = [1, 2, 3];
const firstElement = array20.shift();
console.log(array20);             // Expected output: Array [2, 3]
console.log(firstElement);       // Expected output: 1

// string.slice

const animals2 = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals2.slice(2));            // Expected output: Array ["camel", "duck", "elephant"]
console.log(animals2.slice(2, 4));        // Expected output: Array ["camel", "duck"]

// string.some
 
const array = [1, 2, 3, 4, 5];                    // Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));                   // Expected output: true

// string.sort

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);        // Expected output: Array ["Dec", "Feb", "Jan", "March"]

// string.splice

const months1 = ["Jan", "March", "April", "June"];
months1.splice(1, 0, "Feb");      // Inserts at index 1
console.log(months1);            // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// string.toLocalString

const array21 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array21.toLocaleString("en", { timeZone: "UTC" });
console.log(localeString);        // Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

// string.toReserved

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]
const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

// string.toSorted

const months3 = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months3.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']

// string.toSpliced

const months4 = ["Jan", "Mar", "Apr", "May"];    // Inserting an element at index 1
const months5 = months4.toSpliced(1, 0, "Feb");
console.log(months5);              // ["Jan", "Feb", "Mar", "Apr", "May"]

// string.toString

const array22 = [1, 2, "a", "1a"];
console.log(array22.toString());   // Expected output: "1,2,a,1a"

// string.unshift

const array23 = [1, 2, 3];
console.log(array23.unshift(4, 5)); // Expected output: 5
console.log(array23);  // Expected output: Array [4, 5, 1, 2, 3]

// string.values

const array24 = ["a", "b", "c"];
const iterator2 = array24.values();

for (const value of iterator2) {
  console.log(value);     // Expected output: "a", "b", "c"

}

// string.with

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]

// string.with

const array25 = ["a", "b", "c"];
const iterator4 = array25[Symbol.iterator]();

for (const value of iterator4) {
  console.log(value);        // Expected output: "a", "b", "c"
}


