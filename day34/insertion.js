function insertionSort(array) {
    // change code below this line
    let currentVal;
    for (var i = 1; i < array.length; i++) {
        currentVal = array[i];
        for(var j=i-1;j>=0 && array[j] > currentVal;j--){
            array[j+1] = array[j];
        }
        array[j+1] = currentVal;
    }
    return array;
    // change code above this line
}

console.log(insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));
