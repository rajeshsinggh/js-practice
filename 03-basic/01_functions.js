
function sayMyName() {  //syntex

    // console.log("R");
    // console.log("A");
    // console.log("J");
    // console.log("E");
    // console.log("S");
    // console.log("H");
}
// sayMyName // this is reference

// sayMyName() // this is the function execution

// function addTwoNumbers(number1, number2){  //(number1, number2) is called parameter
        // console.log(number1 + number2)
// }
// addTwoNumbers(3,"a") //(3, a) this is a arguments 


function addTwoNumbers(number1, number2){
    // console.log("Rajesh Singh"); 
    // return number1 + number2
    // console.log("Rajesh Singh");  // this  console will not return anything because after return key word nothing will be executed
}

const result = addTwoNumbers(3,5)
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){  //in short we can write eg: !username this will return same 
        console.log("Please Enter a User Name");
    }
    return `${username} just loogedd in`
}
// console.log(loginUserMessage("Rajesh Singh"));
console.log(loginUserMessage("Rajes Singh"));