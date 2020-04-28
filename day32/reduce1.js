var numbers = [1,2,3,4,5], total=0;
// Using forEach
numbers.forEach(function(number){
    total+= number;
})
console.log(total);
// Using reduce
// pass 0 to second argument so reduce will use 0 as value of previous in first iteration
var total = [1,2,3,4,5].reduce(function(previous,current){
    return previous+current;
},0)
console.log(total);
