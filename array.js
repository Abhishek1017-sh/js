const myarr = [0,1,2,3,4,5]
// javascript arrays are resizable and datatypes can be mixed.
// console.log(myarr[0])
// zero based indexing.
// js array-copy operations create shallowcopies

const myarr2=new Array(1,2,3,4)

// array methods:

// myarr.push(element) //add values in array
// myarr.pop() // remove last  element directly

// myarr.unshift(9) // shifts all elements already present in array towards right element in the startig of array

// myarr.shift() // it shifts towards left side and doesn't take any argument

// console.log(myarr.includes(9))  // gives boolean answer for element present or not
// console.log(myarr.indexOf(9)) // return 0-based index of element and -1 if not +nst
// console.log(myarr)

// const newarr=myarr.join()
// console.log(myarr) // return as array
// console.log(newarr) // after join return as string

// slice , splice

// console.log("A" , myarr)
// const myn1=myarr.slice(1,3)
// console.log(myn1)
// console.log("B", myarr)
// const myn2=myarr.splice(1,3)
// console.log("C", myarr)
// console.log(myn2)

// slice -> it doesn't manipulate the original array and return the sliced part inclusive start and exclusive end
// splice -> it manipulates the original  array like as it will remove the splice part from original  array and return it in splice call

const marvel_heros=["thor","iron man","spiderman"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

//concate do arrays ko merge karta hai properly but new array provide karega
//push array ke andr array bana dega , or new array generate nhi karega

// const all_new_heros=[...marvel_heros,...dc_heros]//...so on // spread out method
// console.log(all_new_heros)

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"})) // interesting jb ye nhi bana payega to empty array output dega, isme batana padega ki array kisse banani hai key se ya value se

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))