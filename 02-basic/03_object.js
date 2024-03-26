// singleton
// Object.create


// object literals

const mySymbol = Symbol("key1") // how declare Symbol

const myUser = {
    name: "Deepa singh",
  [mySymbol] : "myKey1",
    "full name" : "Bijoy Singh" , // this value cannot be accesed by .fullname if space is there in between eg: full name
    age : 19,
    location : "Bangalore",
    email: "rajeshsingh@google.com",
    isLogeedIn : false,
    lastLogedIn : ["Sunday", "Monday"]
}
//** Ways to acess the objects
// console.log(myUser.name);
// console.log(myUser["name"]);
// console.log(myUser["full name"]);
// console.log(myUser[mySymbol]);
// console.log(myUser);

myUser.email = "rajeshsingh@microsoft.com" //changing the value of object
// Object.freeze(myUser) // how to lock the value/freeze

myUser.email = "ajay@trading.com" //this change will be ignored because of boject.freeze
// console.log(myUser);

myUser.greeting = function(){
    console.log("Hello JS User");
}
myUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(myUser.greeting());
console.log(myUser.greetingTwo());
