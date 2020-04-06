const notes = ['Notes 1','Notes 2', 'Notes 3']
notes[2] = 'This is the new notes 2';
notes.forEach(function(item, index){
    console.log(index);
    console.log(item);
})

const todos = ['Do work','Eat','Walk Dog','Sleep','Play','Make games'];
todos.forEach(function(todo,index){
    console.log(`${index + 1}. ${todo}`);
})