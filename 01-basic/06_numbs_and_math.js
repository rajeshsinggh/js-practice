const score = 63
// console.log(score);

const balance =  new Number (100)
// console.log(balance);

// console.log(balance.toString().length); //toString()
// console.log(balance.toFixed(2));   // toFixed()

const otherNumber = 123.644
// console.log(otherNumber.toPrecision(4));


const hundreds = 10000000
// console.log(hundreds.toLocaleString()); // it return the number as us number system
// console.log(hundreds.toLocaleString('en-IN')); // en-IN it coverts as indian number system


// ************************************ Maths ************************************

// console.log(Math);
// console.log(Math.abs(-4)); // wee can convert only - to + number ... and positive will remail same
// console.log(Math.round(4.5)); // round() eg:- 4.6 = 5
// console.log(Math.ceil(4.3)); //ceil() - it will take only upper value eg:- 4.4 = 5
// console.log(Math.floor(4.3)); //floor() - it will take only low value eg:- 4.9 = 4
// console.log(Math.min(4,8,3,8,9));
// console.log(Math.max(4,8,3,8,9));

console.log(Math.random()); // it will always return values between 0 to 1..
console.log((Math.random()*6) + 1); // it will return random value between 1 to 6 ...  +1 will avoid 0 value
console.log(Math.floor(Math.random()*6) + 1); //it will return only one number

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

