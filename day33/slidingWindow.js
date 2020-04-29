const slidingWindow = (arr,num) => {
    if(num > arr.length){
        return null;
    }
    let sum = 0;
    for(let i=0;i<num;i++){
        sum += arr[i];
    }
    max = sum;
    for(let i=0;i<arr.length - num;i++){
        sum = sum-arr[i] + arr[num+i];
        if(max<sum){
            max = sum;
        }
    }

    return max;
}

console.log(slidingWindow([1,2,5,2,8,1,5],2));
console.log(slidingWindow([1,2,5,2,8,1,5],4));
console.log(slidingWindow([4,2,1,6],1));
console.log(slidingWindow([4,2,1,6,2],4));
console.log(slidingWindow([],4));