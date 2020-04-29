// Practice multiple pointers problems
const countUniqueValues = function(arr){
    let i = 0;
    let j = i+1;
    let temp = j;
    let count = 0;
    // prevent mutation
    let newArr = [...arr];
    while(j <= newArr.length){
        if(newArr[i] === newArr[j]){
            j++;
        }else{
            i++;
            newArr[i] = newArr[j];
            j++
            count++;
        }
    }
    console.log(newArr);
    return count;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,5,5,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));