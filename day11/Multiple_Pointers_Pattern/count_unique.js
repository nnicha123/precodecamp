function countUniqueValues(arr){
    let left_index = 0;
    let right_index = left_index+1;
    if(arr.length === 0){
        return 0;
    }
    while(right_index<arr.length){
        if(arr[left_index] === arr[right_index]){
            right_index++;
        }else{
            left_index++;
            arr[left_index] = arr[right_index];
        }
    }
    // console.log(arr);
    return left_index+1;

}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));