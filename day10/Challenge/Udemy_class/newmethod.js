const todos = [{
    text: 'Do work',
    completed: true
},
{
    text: 'Eat',
    completed: false
}, {
    text: 'Walk Dog',
    completed: true
},
{
    text: 'Sleep',
    completed: true
},
{
    text: 'Play',
    completed: false
}, {
    text: 'Make games',
    completed: true
}];

// console.log(false <true)

const findIncomplete = function(todo){
    return todo.filter(function(todo){
        return !todo.completed
    })
}

// console.log(findIncomplete(todos));

// console.log('March'<'January');

const sortNotes = function(todo){
    todo.sort(function(a,b){
        if(a.completed < b.completed){
            //come
            return -1
        } else if(b.completed < a.completed){
            return 1
        } else{
            return -0
        }
    })
}
console.log(todos[1].completed)
sortNotes(todos);
console.log(todos);
console.log(false<true);