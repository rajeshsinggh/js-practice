
// const gitUser = new Object()  //this is singleton object {}

const gitUser = {}

gitUser.id = "123abc"
gitUser.name = "Rajesh"
gitUser.isLogedin = false

// console.log(gitUser);

const regGitUser = {
    email : "rajesh@git.com",
    fullname:{
        userFullname :{
        firstName: "Deepa",
        lastName: "Singh"
        }
    }
}

// console.log(regGitUser.fullname.userFullname.firstName);


//** how to merge/combine object
const obj1 ={1:"Rajesh", 2:"Singh"}
const obj2={3: "Ajay", 4: "Singh"}
const obj3={5: "Deepa", 6: "Singh"}
const obj4={7: "Bijoy", 8: "Singh"}

// const obj3 = {obj1, obj2}
// const obj5 = Object.assign({}, obj1, obj2, obj3, obj4)

const obj5 = {...obj1, ...obj2} //most used syntex to merger objects
// console.log(obj5);



//** database values 

const users = [
    {
        id:1,
        email:"rajesh@gmail.com"
    },
    {
        id:1,
        email:"rajesh@gmail.com"
    },
    {
        id:1,
        email:"rajesh@gmail.com"
    },
    {
        id:1,
        email:"rajesh@gmail.com"
    },
    {
        id:1,
        email:"rajesh@gmail.com"
    }
]

users[1].email

// console.log(gitUser);
// console.log(Object.keys(gitUser));
// console.log(Object.values(gitUser));
// console.log(Object.entries(gitUser));

// console.log(gitUser.hasOwnProperty('isLoggedIn'));



const course = {
    courseName : "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const  {courseInstructor}  = course
const  {courseInstructor : instructor}  = course  //destracture values eg: courseInstructor to instructor this will return same value

// console.log(courseInstructor);
console.log(instructor);


//*** Api 
// {
//     "name":"Rajesh",
//     "courseName" : "Js in hindi",
//     "price":"9999"
// }
/// randomuserme
[
    {},
    {},
    {}
]