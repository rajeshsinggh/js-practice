
//////* object literal *///////

const User = {
    userName: "Rajesh Singh",
    count: 8,
    SingnedIn:true,

     getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`UserName: ${userName}`); // output : username is not defined        
        // console.log(`UserName: ${this.userName}`); // will work      
        // console.log(this); // output : it will return the all object 

    }
}

// console.log(User.userName);
// console.log(User.getUserDetails());\

// if we run this outside : output : {} -Empty Object
// console.log(this);

// if we run this in browser console : output - it will return the Window 


                    ///////* construtor function *///////

// const promiseOne = new Promise()  // new : creates the new context is called constructor ()
// const date = new Date()

function Myuser(username, countNum, islogedin){
    this.username = username;
    this.countNum = countNum;
    this.islogedin = islogedin

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }

    return this
}

// const userOne = Myuser("Rajesh", 12, true)
const userOne = new Myuser("Rajesh", 12, true) // after new : userTwo cannot overWrite The valuse
const userTwo = new Myuser("cahi aur code", 11, false) // it will overwrite userOne data
console.log(userOne);
console.log(userTwo);



