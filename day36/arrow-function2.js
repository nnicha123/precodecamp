const add = (...args) => {
    return args[0] + args[1]
}
console.log(add(11,22,33,44))

const car = {
    color:'Red',
    getSummary(){
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary());