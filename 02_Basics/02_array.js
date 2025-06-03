const marvel_Heros = ["Thor", "IronMan", "CaptainAmerica"];
const DC_Heros = ["SuperMan", "Flash", "BatMan"];




// marvel_Heros.push(DC_Heros);
// console.log(marvel_Heros);




// const all_heros = marvel_Heros.concat(DC_Heros);
// console.log(all_heros);      // [ 'Thor', 'IronMan', 'CaptainAmerica', 'SuperMan', 'Flash', 'BatMan' ]




// const all_new_Heros = [...marvel_Heros, ...DC_Heros];
// console.log(all_new_Heros);        // [ 'Thor', 'IronMan', 'CaptainAmerica', 'SuperMan', 'Flash', 'BatMan' ]




const Another_Array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 0]]];
const real_another_array = Another_Array.flat(Infinity);
console.log(real_another_array);        //[
//                                                1, 2, 3, 4, 5,
//                                                6, 7, 8, 9, 0
//                                         ]



console.log(Array.isArray("RajMishra"));         // false   
console.log(Array.from("RajMishra"));      // [ 'R', 'a', 'j', 'M', 'i', 's', 'h', 'r', 'a' ]

console.log(Array.from({name:"RajMishra"}));        // []        //  interesting topic asked in interview


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));      // [ 100, 200, 300 ]
