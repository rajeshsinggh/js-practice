const accountId = 939553
let accountEmail = "rajeshsingh@gmail.com"
var accountPassword = "123321"
accountCity = "Bangalore"

// accountId = 2 // not allowed 

accountEmail = "rajesh.gmail.com"
accountPassword = "rajesh123"
accountCity = "Guwhati"
let accountState; // if we dont asssing any value it will always return undefined 


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefered not to use var
beacause of issue in block scope and functional scope
*/