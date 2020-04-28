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

var task_names = [];
for(var i = 0, max = tasks.length;i<max;i++){
    task_names.push(tasks[i].name);
}

console.log(task_names);

// Using maps
var map_names = tasks.map(function(task,index,array){
    return task.name;
})

var map_duration = tasks.map(function(task,index,array){
    return task.duration;
})
console.log(map_names);
console.log(map_duration);