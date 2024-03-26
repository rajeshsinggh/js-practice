
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
        // console.log("Please Enter a User Name");
    }
    return `${username} just loogedd in`
}
// console.log(loginUserMessage("Rajesh Singh"));
// console.log(loginUserMessage("Rajes Singh"));

//********************** Functions with Object and Array ************************

function calculateCardPrice(...num1){ //... will add all argument values 
    return num1
}
// console.log(calculateCardPrice(200, 300, 400));


function calculateCardPrice(val1, val2, ...num1){ //
    return num1
}
// console.log(calculateCardPrice(200, 300, 400, 2000)); // output: 400 and 2000 because 200 and 300 will be taken away by val1 and val2

// const User = {  // one method to pass object
//     username : "Rajesh", 
//     price:599
// }
function handleobject(anyObject) {
    console.log(`userName is ${anyObject.username} and price is ${anyObject.price}`);
}
// console.log(handleobject(User));
// handleobject({  //Second method to pass object
//     username: "Singh",
//     price: 199
// })


//************* Passing Arrray ************************ //

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
    return getArray // to pick specific item we need to follow this index syntex : [0] /output: 200
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 300, 400, 500]));