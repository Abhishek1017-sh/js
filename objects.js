// singleton
// Object.create -> singleton object banta hai isse

//object literals

 // curly braces hi hai object , jb khali hai to empty object or jb kuch andr hoga curly brackets ke to empty object nhi hoga
// const mySym = Symbol("key1")

// const JsUser = {
//     name: "abhishek",
//     "full name": "abhishek sharma",
//     [mySym]: "myKey1", //  bina square brackets ke string ki trah use hoga pr agr sumbol ki trah karna hai to sqaure brackets lagane honge
//     age: 20,
//     location: "mathura",
//     email: "as20041009@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday", "saturday"]
// } // array mei access karne ka keval ek hi tareeka tha arr[index] pr object ko access hum key value pair se kar lete hain, yhan hum key or value dono define kar sakte hain...

// // console.log(JsUser.email)
// // console.log(JsUser["email"]) // square brackets mei data string format mei denge
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym]) 

// JsUser.email="abhishek.gamil.com" //  change value
// console.log(JsUser["email"])
// // Object.freeze(JsUser) // ab changes allocate nhi honge freeze krne ke baad
// // console.log(JsUser["email"])
// // console.log(JsUser)

// JsUser.greeting = function(){
//     console.log("hello js user")
// }
// JsUser.greetingtwo = function(){
//     console.log(`hello js user, ${this.name}`) // string interpolation backticks
// }
// console.log(JsUser.greeting()) // undefined
// console.log(JsUser.greetingtwo())

// // generally objects ko access . se hi karna hai,  pr kuch cases mei square brackets se bhi karte hain


//const tinderUser=new Object() //--> singleton object hai
const tinderUser={} //--> non singlonton object hai

tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const  regularUser={
    email:"some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"abhishek",
            lastname:"sharma"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname)
// if let's  say fullname nhi tha to projects  mei api call ke time if else lagane padenge to  usko prevent karne ke liye
// yhan call karte  time ? ye lagaa dete hain 
// example : regularUser.fullname?.userfullname.lastname
// isko  further projects mei use karenge abhi nhi

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2) // isme {} (i.e, empty array) ye extra parameter lekr chalenge kyuki ye last mei confirm rahega ki answer format isi mei ayega,also named as target, and rest are known as source 
const obj3={...obj1,...obj2} // spread operator

//console.log(obj3);

const user=[
    {
        id:1,
        email:"abs@gmail.com"
    },
    {
        id:1,
        email:"abs@gmail.com"
    },
    {
        id:1,
        email:"abs@gmail.com"
    },
    {
        id:1,
        email:"abs@gmail.com"
    },
    {
        id:1,
        email:"abs@gmail.com"
    }
]
// loop through these objects
user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // array output
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// //if value not exit so to avoid crash
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // boolean answer
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course={
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
// course.courseInstructor
const {courseInstructor : instructor} =course
console.log(instructor);