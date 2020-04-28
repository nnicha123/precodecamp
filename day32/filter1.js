var tasks = [
    {
        'name':'Write for Envato Tuts',
        "duration": 120
    },
    {
        'name':'Work out',
        "duration": 60
    },
    {
        'name':'Procrastinate on Duolingo',
        "duration": 240
    },

];
// Using forEach
var difficult_tasks = [];
tasks.forEach(function(task){
    if(task.duration >= 120){
        difficult_tasks.push(task);
    }
})
// console.log(difficult_tasks);

// Using filter
var filter_tasks = tasks.filter((task) => {
   return task.duration >=120;
})

console.log(filter_tasks);