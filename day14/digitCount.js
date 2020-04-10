function digitCount(num){
    let count = 0;
    while(num>0){
        num = Math.floor(Math.abs(num)/10);
        count++;
    }
    return count;
}
// console.log(digitCount(1233245));

function findMaxReturnCount(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
            // console.log(max);
        }
    }
    return digitCount(max);
}

console.log(findMaxReturnCount([123,1,3,345,12567,3,2,6,861234,345]));