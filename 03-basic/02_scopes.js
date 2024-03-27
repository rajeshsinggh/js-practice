
// let num1 = 20
// const num2 = 30
// var num3 = 40
 let num2 = 300
if (true) {
    let num1 = 20
    const num2 = 30
//    console.log("inner :", num2);
}
// console.log(num1);
// console.log(num2);
// console.log(num3);


//************************************************************ */

function one(){
    const username = "Rajesh Singh"

    function two(){   //child function can access the parent variable
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()

if (true) {
   const username = "Rajesh"
   if (username === "Rajesh") {
        const website = "rajesh/youtube"
        // console.log(username + website);
   } 
//    console.log(website); // this will throw error because we cannot access the variable outside scope
// console.log(username); // variable is accessible because we are running under the scope
}
// console.log(username); this will throw error because we cannot access the variable outside scope

// +++++++++++++++++++++++++++ intresting +++++++++++++++++++++++++

console.log(addone(5)) // we can acces beffore declaration //syntex 1 
function addone(num) {
    return num + 1
}

// addTwo(10) // We cannot use before declaration //syntex 2 
const addTwo = function(num){
    return num + 2
}
