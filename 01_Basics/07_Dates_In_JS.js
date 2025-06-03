// Dates

let myDate = new Date();

// console.log(myDate);   // 2025-06-03T03:22:04.675Z
// console.log(myDate.toString());   // Tue Jun 03 2025 03:22:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Jun 03 2025
// console.log(myDate.toISOString());  // 2025-06-03T03:22:04.675Z
// console.log(myDate.toJSON());     // 2025-06-03T03:22:04.675Z
// console.log(myDate.toLocaleDateString()); // 6/3/2025
// console.log(myDate.toLocaleString());  // 6/3/2025, 3:22:04 AM
// console.log(myDate.toLocaleTimeString());  // 3:22:04 AM
// console.log(myDate.toTimeString());  // 03:22:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());    // Tue, 03 Jun 2025 03:22:04 GMT


const date1 = new Date("August 19, 1975 23:15:30 GMT+07:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-02:00");

// console.log(date1.getTimezoneOffset() === date2.getTimezoneOffset());      // True



let myCreatedDate1 = new Date (2023, 0, 5);
// console.log(myCreatedDate1.toDateString());   //  Thu Jan 05 2023

let myCreatedDate2 = new Date (2023, 0, 23, 5, 3);
// console.log(myCreatedDate2.toLocaleString());   //  1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date ("2023-01-24");
// console.log(myCreatedDate3.toLocaleString());   //  1/24/2023, 12:00:00 AM

let myCreatedDate4 = new Date ("10-20-2004");
// console.log(myCreatedDate4.toLocaleString());   //  10/20/2004, 12:00:00 AM


let myTimeStamp = Date.now();

// console.log(myTimeStamp);    // mili-second : 1748923441736
// console.log(myCreatedDate1.getTime());  // mili-second : 1672876800000
// console.log(Math.floor(Date.now()/1000));  // in second : 1748923636

let newDate = new Date();

// console.log(newDate);          // 2025-06-03T04:19:55.794Z
// console.log(newDate.getMonth() + 1);            // 6
// console.log(newDate.getDate());                // 3
// console.log(newDate.getDay());                // 2
// console.log(newDate.getFullYear());          // 2025
// console.log(newDate.getHours());            // 4
// console.log(newDate.getMilliseconds());    // 794
// console.log(newDate.getMinutes());        // 19
// console.log(newDate.getSeconds());       // 55
// console.log(newDate.getTime());         //  1748924395794



console.log(`Here, Today is ${newDate.getDay()}nd Day of ${newDate.getMonth() + 1}th Month`);

console.log(newDate.toLocaleString('default',{
      weekday: "long"
}));






