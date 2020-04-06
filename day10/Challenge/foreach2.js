let arr = [12,3,4,6,78,47,9];

arr.forEach(function(array){
    console.log(array);
})

let obj = [{
    name :'One',
    height:166
},
{
    name:'Two',
    height:133
},{
    name:'Three',
    height:177
},{
    name:'Four',
    height:169
},{
    name:'Five',
    height:190
}]

let empty = []
console.log(empty)
obj.forEach(function(object){
    console.log(object);
    empty.push(object);
})
console.log(empty);