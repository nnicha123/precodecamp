const createCounter = () => {
    let count = 0

    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        get(){
            return count
        }
    }
}
// Break into many functions
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

// Adder
const createAdder = (a) => {
    return (b) => {
        return a+b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))
const add100 = createAdder(100)
console.log(add100(-2))
console.log(add100(20))

// Tipper
const createTipper = (baseTip) => {
    return (billAmount) => {
        return baseTip*billAmount
    }
}

const createTip15 = createTipper(.15)
console.log(createTip15(100))
console.log(createTip15(200))
const createTip25 = createTipper(.25)
console.log(createTip25(100))
console.log(createTip25(200))
// const myFunction = () => {
//     const message = 'This is my message'
//     const printMessage = () =>{
//         console.log(message)
//     }
//     return printMessage()
// }
// const myPrintMessage = myFunction()
// console.log(myPrintMessage)