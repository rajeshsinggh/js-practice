//Dates

const myDate =  new Date()

// console.log(myDate);  // output : 2024-03-24T09:50:09.211Z
// console.log(myDate.toLocaleString());// output : 3/24/2024, 9:57:38 AM
// console.log(myDate.toDateString());  // output : Sun Mar 24 2024
// console.log(myDate.toISOString());   // output : 2024-03-24T09:50:09.211Z
// console.log(myDate.toJSON());        // output : 2024-03-24T09:50:09.211Z
// console.log(myDate.toLocaleDateString());   // output : 3/24/2024
// console.log(myDate.toLocaleTimeString());   // output : 9:50:09 AM
// console.log(myDate.toString());             // output : Sun Mar 24 2024 09:50:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString());         // output : 09:50:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());          // output : Sun, 24 Mar 2024 09:50:09 GMT
// console.log(myDate.getTimezoneOffset());    // output : 0


// let myCreatedDate = new Date(2024, 0, 23)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023/01/23") // syntex : yy//mm/dd
// console.log(myCreatedDate.toLocaleString());


let myCreatedDate = new Date("03/22/2024")  //indian used syntex = mm/dd/yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert meli second in second

let newDate = new Date()
// console.log(newDate.getMonth());  //all get functions ()...........
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());

// Example with string interpolation `` :-
// console.log(` This is the month of ${newDate.getMonth()} and day is ${newDate.getDay()}`);

newDate.toLocaleString('default', {
    weekday: "long",
})






