const square = (num) =>  num*num
console.log(square(6));

const people = [{
    name:'Andrew',
    age:27
},{
    name:'Layla',
    age:22
},{
    name:'Pui',
    age:3
}]

const under30 = people.filter((person) => person.age <27)

console.log(under30)

// const age22 = people.filter((person) => person.age ===22)
const age22 = people.find((person) => person.age === 22)
console.log(age22.name)