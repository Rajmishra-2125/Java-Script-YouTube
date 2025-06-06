// Singleton
// object.create

// Object Literals

const JSuser = { 
    name :"Raj ",
    "FullName" : "Raj Mishra",
    Age : 20,
    Email : "raj21258@gmail.com",
    IsLogined : false,
    Location : "Utter Pradesh",
    LastLoginDays : ["Monday", "Tuesday"]
};

/* console.log(JSuser);          {
                                     name: 'Raj ',
                                     FullName: 'Raj Mishra',
                                     Age: 20,
                                     Email: 'raj21258@gmail.com',
                                     IsLogined: false,
                                     Location: 'Utter Pradesh',
                                     LastLoginDays: [ 'Monday', 'Tuesday' ]
                                }                                                       */


// console.log(JSuser.Email);         //  raj21258@gmail.com
// console.log(JSuser["name"]);       //  Raj 
// console.log(JSuser["FullName"]);   // Raj Mishra

const MySym = Symbol("Key1");                                

const JSuser1 = { 
    name :"Raj ",
    "FullName" : "Raj Mishra",
    [MySym] : "Key1",
    Age : 20,
    Email : "raj21258@gmail.com",
    IsLogined : false,
    Location : "Utter Pradesh",
    LastLoginDays : ["Monday", "Tuesday"]
};

// console.log(JSuser1.MySym);    // Key1
// console.log(typeof JSuser1.MySym); // string

/* console.log(JSuser1);               {
                                            name: 'Raj ',
                                            FullName: 'Raj Mishra',
                                            Age: 20,
                                            Email: 'raj21258@gmail.com',
                                            IsLogined: false,
                                            Location: 'Utter Pradesh',
                                            LastLoginDays: [ 'Monday', 'Tuesday' ],
                                            [Symbol(Key1)]: 'Key1'
                                        }    */


// console.log(JSuser1.MySym);    //  undefined    // This is wrong syntax
// console.log(JSuser1[MySym]);     // Key1      // this is right way to find a string that is in object
// console.log(typeof JSuser1[MySym]);  // string


JSuser1.Email = "mraj94759@gmail.com";
// console.log(JSuser1.Email);       // mraj94759@gmail.com
// Object.freeze(JSuser1);  // this is use in the object after using this we can't add any element that object
JSuser1.Email = "rajmishra.94759@gmail.com";
// console.log(JSuser1.Email);       // mraj94759@gmail.com

JSuser1.greeting = function() {
       console.log("Hello JS users")                //   Hello JS users           
}; 

console.log(JSuser1.greeting);     //  [Function (anonymous)]
console.log(JSuser1.greeting());     //  undefined

JSuser1.greetingtwo = function() {
       console.log(`Hello JS users ${this.name}`)                //   Hello JS users Raj          
};

console.log(JSuser1.greetingtwo);     //  [Function (anonymous)]
console.log(JSuser1.greetingtwo());     //  undefined
