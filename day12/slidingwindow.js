function maxSubarraySum(arr,length){
    let max = 0;
    if(length > arr.length){
        return null;
    }
    for(let i=0;i<length;i++){
        max = arr[i] + max;
    }
    let temp_max = max;
    for(let i=length;i<arr.length;i++){
        temp_max = temp_max - arr[i-length] + arr[i];
        if(temp_max > max){
            max = temp_max;
        }
    }
    return max;
}

console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4));
console.log(maxSubarraySum([100,200,300,400],2));
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([2,3],3));