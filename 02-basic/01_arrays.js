
const  myArr = [0,1,2,3,4,5]  // 
const superHeros = ['shaktiman', 'nagin', 'naagraj']

const myArr2 = new Array(1,2,3,4,5,6,7,8)   // new Array() automatically create []

// console.log(myArr[3]);

// Array Methods 

// myArr.push(7)  // .push() just add  value in the end of array
// myArr.push(8)
// myArr.pop()  // pop() just delete the last value of array

// myArr.unshift(9) //.unshift() just add  value in the beginning of array
// myArr.shift() // .shift() delete the first value of array


// console.log(myArr.includes(9));  // questioneaar method
// console.log(myArr.indexOf(5));



// const newArray = myArr.join() // .join() converts array in string with , separated

// console.log(myArr);
// console.log( typeof(newArray));


// .slice(), .splice()

console.log("A",myArr);

const myAr = myArr.slice(1, 3)

console.log(myAr);
console.log("B",myArr);

const myAr2 = myArr.splice(1, 3)
console.log("c",myArr);
console.log(myAr2);



