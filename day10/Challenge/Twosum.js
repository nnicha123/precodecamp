let nums = [2,7,11,15];
let target = 9;
nums.forEach(function(value,index){
    if(value <= target){
        console.log(value);
        console.log(index);
    }
})