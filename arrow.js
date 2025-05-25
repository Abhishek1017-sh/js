// const user={
//     username:"abhishek",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`);
        
//     }
// }
// user.welcomeMessage()

//+++++++++++++ ARROW FUNCTION +++++++++++++++++++
// function chai(){
//     let username="abhishek"
//     console.log(this.username); // underfined
// }
// chai()

// const chai= function(){
//     let username="abhishek"
//     console.log(this.username);//undefined
// }
// chai()

// const chai= () => { // ye hai arrow function
//     let username="abhishek"
//     console.log(this.username);//undefined
// }
// chai()

// const chai= () => {
//     let username="abhishek"
//     console.log(this);//{}
// }
// chai()

//NOTE: this points the current scenario. initially it is empty that is curly braces {}

//Basic Arrow Function:
// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,3)) //5

//Implicit return -> isme parenthesis use nhi karne padte hain

// const addTwo=(num1,num2) => num1+num2
// console.log(addTwo(2,3)) //5 
//OR
// const addTwo=(num1,num2) => (num1+num2)
// console.log(addTwo(2,3)) //5
// curly braces use kiya to return lilkhna hi padega(explicit return) and curly braces use nh kiya to return nhi likhna padega(implicit return -> isme maan lete hain ki return karna hai)

// RETURN OBJECT:
// const  addTwo=(num1,num2)=>{username:"abhishek"}
// console.log(addTwo());//undefined

// undefined isliye aya kyuki is tarah se object  return nhi kar sakte,
// object return karne ke liye usko parenthesis () isme wrap karna hi padega

// const  addTwo=(num1,num2)=>({username:"abhishek"})
// console.log(addTwo()); //{ username: 'abhishek' }

//+++++++++++++++ Immediately Invoked Function Expression (IIFE) +++++++++++++++++
// iife -> jo function immediately execute ho jaye uske liye iife ka use karte hain, or global scope ke
// pollution se problem hoti hai kai baar to us global scope ke variable or functions ke pollution ko hatane ke 
// liye hum iife ka use karte hai.

(function chai(){ //named IIFE
    console.log(`DB Connected`);
})();

(function chai2(){
    console.log(`DB Connected 2`);
})();

( () => { // SIMPLE IIFE
    console.log(`DB Connected 3`);
})();

( (name) => { // SIMPLE IIFE with passed PARAMETERS
    console.log(`DB Connected 4 ${name}`);
})('abhishek');
// 1st () is function ki defination jhan likhenge
// 2nd () is function execution call
// iife ko end karne ke liye semicolon must hai kyuki ek ke baad agr dusra hua to use execute nhi karega