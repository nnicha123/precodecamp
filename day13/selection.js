function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min_index = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        if (i !== min_index) {
            var temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }

    }
    return arr;
}

console.log(selectionSort([5, 3, 3, 8, 9, 15, 10, 8, 24]));
console.log(selectionSort([34, 22, 10, 19, 17]));