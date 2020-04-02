let isRaining = true;
isRaining = false;
console.log(isRaining);

const person = {
    age:27
}
// person = {} //This line will fail because try to assign to const variable which is person
//but no problem re-assigning to person.age because not declared const.
person.age = 28;
console.log(person.age);