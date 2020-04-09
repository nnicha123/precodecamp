function minSubArrayLen(arr,num){
    let max = 0;
    let index = 0;
    let count = 1;
    //find maximum number & remember index;
    for(var i = 0;i<arr.length;i++){
        if(arr[i] >= max){
            max = arr[i];
            index = i;
        }
    }
    while(index>0 && index<arr.length-1){
        count = count + 1;

        if(arr[index-1] > arr[index+1]){
            max = max + arr[index-1];
        } else{
            max = max + arr[index+1];
        }
    }
    console.log(max,count);

}

console.log(minSubArrayLen([2,3,1,2,4,3],7));