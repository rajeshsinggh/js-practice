// // promise creation
// const promiseOne = new Promise(function(resolve, reject){
//     //DO async task
//     // Db calls, Cryptohraphy, network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function (){
//     console.log("promise consumed");
// })


// new Promise(function(resolve, reject){  //second
//     setTimeout(function (){
//         // console.log('async is completed');
//         resolve()
//     }, 1000)
// }).then(function(){
//     // console.log('async two resolved');
// })

// const promiseThree = new Promise(function(resolve, reject){ //third promise
//     setTimeout(function(){
//         resolve({username: "Rajesh", email:"rajesh@gmail.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
    // console.log(user);
// })


//  new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username:"rajesh singh", password:'1242345'})
//         }else{
//             reject('ERROR : somthing went Wrong')
//         }
//     }, 1000)
// })


// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// }).finally(()=>{console.log("The promise is eather solved or rejected");})


// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//                 let error = true
//                 if (!error) {
//                     resolve({username:"javascript", password:'1242345'})
//                 }else{
//                     reject('ERROR : JS went Wrong')
//                 }
//             }, 1000)  
// })

// async function promiseFive(){
//     const response = await promiseFive
//     console.log(response);
// }
// promiseFive()


// fetch ()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response=>Response.json())
// .then(userArray=>{
//     return userArray
// })