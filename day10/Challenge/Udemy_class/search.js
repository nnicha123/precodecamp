const todos = ['Do work','Eat','Walk Dog','Sleep','Play','Make games'];
console.log(todos.indexOf('Walk Dog'));

const notes = [{
    title:'My next trip',
    body: 'I would like to go to Spain'
},{
    title:'My habbits to work on',
    body: 'Exercise. Eating abit better'
},{
    title: 'Office modification',
    body:'Get a new seat'
}]
console.log(notes.length);
console.log(notes);
console.log(notes.indexOf({}));

//Same value doesn't mean it will be equal (for objects) 
console.log({} === {});

//Only equal if it is exactly the same object
let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject);