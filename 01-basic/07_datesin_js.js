//Dates

const myDate =  new Date()

console.log(myDate);  // output : 2024-03-24T09:50:09.211Z
console.log(myDate.toLocaleString());// output : 3/24/2024, 9:57:38 AM
console.log(myDate.toDateString());  // output : Sun Mar 24 2024
console.log(myDate.toISOString());   // output : 2024-03-24T09:50:09.211Z
console.log(myDate.toJSON());        // output : 2024-03-24T09:50:09.211Z
console.log(myDate.toLocaleDateString());   // output : 3/24/2024
console.log(myDate.toLocaleTimeString());   // output : 9:50:09 AM
console.log(myDate.toString());             // output : Sun Mar 24 2024 09:50:09 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toTimeString());         // output : 09:50:09 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());          // output : Sun, 24 Mar 2024 09:50:09 GMT
console.log(myDate.getTimezoneOffset());    // output : 0






