// function sayMyName(){
    
// }

// function add(num1,num2){ // type dene ki zarurat mhi hoti js mei
//     console.log(num1+num2);
// }
// //add(2,3)
// const result=add(4,5)
// console.log("result:",result);
// here in result undefined occurs so to avoid that we do certain changes:

// //WAY-1:
// function add(num1,num2){
//     let result=num1+num2
//     return result
// }
// const result=add(4,5)
// console.log("result:",result);

// //WAY-2:
// function add(num1,num2){
//     return num1+num2
// }
// const result=add(4,5)
// console.log("result:",result);

// function loginUserMessage(username){
//     if(username===undefined){ //here we use triple equal instead of double equal but double can also be used
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// //console.log(loginUserMessage("abhishek"));
// console.log(loginUserMessage()); // nothing passed so : undefined will come

// kuch cheezon ko already maan liya jata hai ki false value hai, like empty string " " or undefined ko

// function loginUserMessage(username){
//     if(!username){
//         console.log("Please enter username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());

//NOTE: CAN ALSO USE DEFAULT VALUES

// function loginUserMessage(username="avi"){ // value overwrite hojayegi agr koi value pass ki gyi hogi to else default value use hojayegi
//     return `${username} just logged in` // `` -> backticlks are used for template literals
// }
// console.log(loginUserMessage()); //avi just logged in
// console.log(loginUserMessage("abhishek")); //abhishek just logged in

// on cart services we generally see we dont know how to how items are to be added in the cart so for that purpose:

// function calculateCartPrice(...num1){ // ... these three dots are known as rest operator as well as spread operator : their diff depends upon the use case
//     return num1
// }
// console.log(calculateCartPrice(200,400,500)); //[ 200, 400, 500 ]

// rest operator: (...) they tell teh fuction that jo bhi item mil rahe hain vo unlimited hai yani khule hain kitne bhi mil sakte hain inhe ek jagh pack karo or mujhe dedo

// function calculateCartPrice(val1, val2, ...num1){ 
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,2000,4000)); //num1=[ 500, 2000, 4000 ] && val1=200,val2=400

// object ko function mei pass karana
const user={
    username:"abhishek",
    price:299
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //Username is abhishek and price is 299
}
//handleObject(user)
handleObject({
    username : "avi",
    price :  466
})
// pass array

const mynewArray=[200,444,556,768]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(mynewArray)); //444
console.log(returnSecondValue([200,444,556,768])); //444
