let arr = [4, 1, 2, 1, 2, 4, 5, 6, 7, 7, 5];
let count = 0;


var singleNumber = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        count = 0
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
            } else {
                count = count + 1;
            }
            if (count > arr.length - 2) {
                return arr[i];
            }
        }
    }
}
let single = singleNumber(arr);
console.log(single);
