function minSubArrayLen(arr, number) {
    let max_num = 0;
    let index = 0;
    let count = 1;
    //Find maximum number
    for (let i = 0; i < arr.length; i++) {
        if (max_num < arr[i]) {
            max_num = arr[i];
            index = i;
        }
    }
    if (max_num > number) {
        return 1;
    }
    if (arr[index + 1] > arr[index - 1]) {
        max_num = max_num + arr[index + 1];
        count++;
        
    } else {
        max_num = max_num + arr[index - 1];
        count++;
    }
    index++
    if (max_num >= number) {
        console.log(max_num);
        return true;
    }
    return false;
}
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52));
// console.log(minSubArrayLen([2,3,1,2,4,3],7));
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));