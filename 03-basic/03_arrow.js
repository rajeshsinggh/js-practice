
const user = {
    username : "Rajesh Singh",
    price : 9999,

    welcomeMessage : function() {
        console.log(`${this.username}, Welcome to Website`); //.this() is global scope and takes the current value
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Ajay Singh"
// user.welcomeMessage()

// console.log(this);


// **********************************

// function chai(){
//     let username = "Rajesh"
//     console.log(this);
// }

// chai()

// ************** Arrow Function *****************************


const  chai = () => {  //syntex
    let username = "Rajesh"
    // console.log(this);
}

// chai()

// const addTwo = (num1, num2) =>{ // basic arrow function also known as explicit

//     return num1 + num2
// }
// console.log(addTwo(3,5));

// const addTwo = (num1, num2) => num1 + num2 // implicit syntex
// const addTwo = (num1, num2) => (num1 + num2) //implicit syntex: if we wrape in curlybrases{}, we have to write return keyword ,, else if we wrape under () we dont have to write return keyword 
const addTwo = (num1, num2) =>  ({username : "Bijay, Deepa"}) // how to return object in implicit


console.log(addTwo(5,5));


const myArray = [1,3,4,5,6,7,8]

myArray.forEach(function() {}) // syntex

myArray.forEach()= () =>{} //syntex






