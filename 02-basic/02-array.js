
const mavalHeros = ["Thor", "Ironman", "Captain"];
const dcHeros = ["BatMan", "SuperMAn", "Flash"];

// mavalHeros.push(dcHeros);   // Array under Array //! prefered // .push() return in existing array

// console.log(mavalHeros[3][1]);

// const allHeros = mavalHeros.concat(dcHeros) // .concat() return new array //Marging array
// console.log(allHeros);

const allNewHeros = [...mavalHeros, ...dcHeros]; //... is use for marging array  // ... is call spread operator
// console.log(allNewHeros);

const anotherArray = [1,2,3,4, [5,6,7,], [8,9, [1,2]]]; //to convert all array in one array

let useableArray = anotherArray.flat(Infinity); // .flat() merg all array in one array
// console.log(useableArray);


console.log(Array.isArray("Rajesh")); // how to convert string in array
console.log(Array.from("Rajesh")); // .from will convert string in array form
console.log(Array.from({name : "Rajesh"})); // if cant convert in array it will return [] array

let score1 = 200;
let score2 = 300;
let score3 = 400;

console.log(Array.of(score1, score2, score3));

//  ! imp :  Array.isArray / Array.from() / Array.of()   /