var nums = [65,44,12,4,5];
nums.forEach(myFunction)
function myFunction(item,index,arr){
    arr[index] = item*10;
}

console.log(nums);

var arr = ['a','b','c'];
arr.forEach(element =>console.log(element));
