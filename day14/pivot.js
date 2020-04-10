function pivot(arr, start) {
    let start_index = start;
    let count = 0;
    let j = 0;
    while (j < 12) {
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

        j++;
        console.log(j);
    }
    console.log(arr);
}

console.log(pivot([28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18], 0))