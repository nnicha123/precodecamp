function selectionSort(array) {
    // change code below this line
    let minIndex = 0;
    let temp;
    for (let j = minIndex; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[minIndex] <= array[i]) {
                temp = array[i];
                array[i] = array[minIndex];
                array[minIndex] = temp;

            }
        }
        minIndex++;
    }

    return array;
    // change code above this line
}


console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));