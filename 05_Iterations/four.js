const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in myObject) {
    // console.log(`${key} is shortcut of ${myObject[key]}`);
}

const programming = ["js", "cpp", "rb", "swift"];

for (const key in programming) {
    console.log(programming[key]);
}