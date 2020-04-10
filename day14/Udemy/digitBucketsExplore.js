let digitBuckets = Array.from({length: 10}, () => []);
console.log(digitBuckets);
// digitBuckets[1].push(16);

for(let i = 0;i<20;i++){
    digitBuckets[1].push(i);
}
console.log(digitBuckets);

//example get all numbers with digit 1 and push into bucket 1;(for LSB)
number = [21,33,44,555,661,78,81,901];
//example function num will be last digit we want to store (e.g.1)
function getLSBdigit(arr,num){
    let arrnew = [];
    for(let i =0;i<arr.length;i++){
        if(arr[i]%10 === num){
            arrnew.push(arr[i]);
        }
    }
    console.log(arrnew);
}
console.log(getLSBdigit(number,1));