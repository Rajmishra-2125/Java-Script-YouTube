const coding = ["js", "cpp", "rb", "python", "java"];

// coding.forEach( function(val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

function printMe(item) {
    // console.log(item);
};

coding.forEach(printMe)


coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})


const myCoding = [
    {
        language: "javascript",
        languageFile: "js"
    },
    {
        language: "java",
        languageFile: "java"
    },
    {
        language: "python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFile);
})