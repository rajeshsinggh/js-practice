
// Stack (Primitive), Heap (Non- Primitive)


// Example - Stack primitive - whatever we will take it will provide copy.......
let myName = "Rajesh Singh"

let myAnotherName = myName;
myAnotherName = "Ajay Singh"

console.log(myName);
console.log(myAnotherName);


// Example - Heap(Non-Primitive) - it gives the reference of original value .....

let userOne = {
    name: "Rajesh",
    email : "rajeshsinghgmail.com"
}

let userTwo = userOne

userTwo.email = "singhbijay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);