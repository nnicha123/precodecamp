function averagePair(arr, avg) {
    if (arr.length === 0) {
        return false;
    }
    //pointer
    let i = 0;
    let j = arr.length - 1;
    let average = 0;
    while (i !== j) {
        average = (arr[i] + arr[j]) / 2;
        if (average > avg) {
            j--;
        } else if (average < avg) {
            i++;
        } else {
            return true;
        }
    }
    return false;
}
console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));