let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate) //object

// let mycreateddate= new Date(2023,0,23)
// console.log(mycreateddate.toDateString()) 
// // month start with 0 is js, 0 -> january
//                         //   1 -> february and so on

// let mycreateddate= new Date(2023,0,23,5,3)
// console.log(mycreateddate.toLocaleString())
                        
// let mycreateddate= new Date("2023-01-14")
// console.log(mycreateddate.toLocaleString())

// let mycreateddate= new Date("01-14-2023")
// console.log(mycreateddate.toLocaleString())

// let mytimestamp = Date.now()
// console.log(mytimestamp)
// console.log(mycreateddate.getTime()) // time is in milliseconds in output

// console.log(Math.floor(Date.now()/1000)) // to convert to seconds 

let newDate=new Date();
console.log(newDate.getMonth()+1) // plus  1 because month start from 0 in js so  to make end user understand  we plus 1