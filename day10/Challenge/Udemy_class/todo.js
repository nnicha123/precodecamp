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
//1. Convert to object;
//2. Create function to remove todo by text value
//3. Make it case insensitve


let findInd = function (todo,Text) {
    const index = todo.findIndex(function(to,index){
        // console.log(to.text.toLowerCase() === Text.toLowerCase());
        return to.text.toLowerCase() === Text.toLowerCase();
    })
    if(index >-1){
        todos.splice(index,1);
    }
}
const now = findInd(todos,'!EaT');
console.log(todos);

// todos.splice(4,1,1);
// console.log(todos)