const todos = [{
    text: 'Do work',
    status: 'Completed'
},
{
    text: 'Eat',
    status: 'Completed'
}, {
    text: 'Walk Dog',
    status: 'Incomplete'
},
{
    text: 'Sleep',
    status: 'Incomplete'
},
{
    text: 'Play',
    status: 'Completed'
}, {
    text: 'Make games',
    status: 'Incomplete'
}];

const findTodos = function(todo,query){
    return todo.filter(function(todo,index){
        const isStatusMatch = todo.status.toLowerCase().includes(query.toLowerCase())
        return isStatusMatch
    })
}
console.log(findTodos(todos,'incomplete'));