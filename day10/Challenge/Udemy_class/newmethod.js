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

const findIncomplete = function(todo){
    return todo.filter(function(todo){
        return !todo.completed
    })
}

console.log(findIncomplete(todos));