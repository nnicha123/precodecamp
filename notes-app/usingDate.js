//Unix Epoch - January 1st 1970 00:00:00
//(date before this is negative and after this is negative) -> represented in negative
const now = new Date()
// console.log(now.getTime()) -> is the number of milliseconds since epoch (if not specified) 
const timeStamp = now.getTime()

// convert back to date
const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

const firstDate = new Date('April 27 2019')
const secondDate = new Date('May 5 2013')

const timeStampOne = firstDate.getTime()
const timeStampTwo = secondDate.getTime()

console.log(timeStampOne,timeStampTwo)

if(timeStampOne<timeStampTwo){
    console.log(firstDate.toString())
} else if(timeStampTwo<timeStampOne){
    console.log(secondDate.toString())
}