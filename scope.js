// if(true){
//     let a=10
//     const b=20
//     var c=30    
// }
// console.log(a); //a is not defined -> good
// console.log(b); //b is not defined -> good
// console.log(c); //30 -> bad because c is only defined in the scope so it should also not be accessed but it is.

// var c=300
// if(true){ // iske andr vala -> block scope or iske bahar vala global scope
//     let a=10
//     const b=20
//     c=30   
// }
// // console.log(a); //a is not defined -> good
// // console.log(b); //b is not defined -> good
// console.log(c); //30 -> 300 kyu nhi hua ??

// is upr vaali cheez ki vajh se ki var dono jagh problem dega hyum var ko ignore karte kyuki scoping mei problem aati hai usse

// let a=300
// if(true){
//     let a=10
//     const b=20
//     console.log("inner:",a); //10-> block scope
    
// }
// console.log("outer:",a); //300 beacuse global scope

// JITNI BAAR CURLY BRACES {} AYEGA UTNI BAAR SCOPE AYEGA
//NOTE: console mei jb scope check karte hain to vahn alg and node mei karte vhn alg, to dhyan dena hai

function one(){
    const username="abhishek"
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()