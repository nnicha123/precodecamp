function binarySearch(sortedArr, value){
    let left_pointer = 0;
    let right_pointer = sortedArr.length - 1;
    let middle_pointer = 0;
    while(left_pointer <=right_pointer ){
        middle_pointer = parseInt((left_pointer + right_pointer)/2);
        if(sortedArr[middle_pointer] === value){
            return middle_pointer;
        } else if (sortedArr[middle_pointer] <= value){
            left_pointer++;
        } else {
            right_pointer--;
        }
    }
    return -1;
}
console.log(binarySearch([1,2,3,4,5],10));