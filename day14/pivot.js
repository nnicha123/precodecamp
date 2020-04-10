function pivot(arr, start) {
    let start_index = start;
    let count = 0;
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[start] > arr[i]) {
            count++;
        }
    }
    //SWAP
    let temp = arr[count];
    arr[count] = arr[start];
    arr[start] = temp;
    // console.log(arr, count);

    //Keep first count & now look at every element to the left
    let first_round = count;
    // console.log(first_round);

    //Left loop //reset count (later can put into recursive function)
    count = 0;
    for(let i = 0;i<first_round;i++){
        if(arr[first_round]>arr[i]){
            count++
        }
    }
        //SWAP
        console.log(count);
        temp = arr[count];
        arr[count] = arr[first_round];
        arr[first_round] = temp;
        console.log(arr);
}


console.log(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18], 0))