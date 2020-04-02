const toDos = ['Walk dog', 'Eat dinner', 'Learn Javascript','Play games','Watch movies'];
console.log(toDos[0]);
console.log(toDos[toDos.length -2]);
//delete 3rd item
toDos.splice(2,1);
console.log(toDos);
//add new item to end\
toDos.push('Read book');
console.log(toDos);
//remove first item on list
toDos.shift();
console.log(toDos);