//  Immediately Invoked Function Expressions (IIFE)


// Named IIFE

(function chai(){
    console.log(`DB Connected`);       // DB Connected  
})();


// Unnamed IIFE

((name) => {
    console.log(`DB Connectedn ${name} `);  //  DB Connected Raj Mishra
})('Raj Mishra');

