let arr = [4,1,2,1,2];
let count = 0;
// let storenumber = [];
for (var i = 0; i < arr.length; i++) {
    count = 0
    // console.log(arr[i]);  
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            // console.log(`${arr[i]} + ${arr[j]} found equal`);
        } else {
            // console.log(`${arr[i]} + ${arr[j]} not equal`);
            // storenumber[j] = arr[1];
            count = count + 1;
        }
        //length -2 means itself and a duplicate number
        if (count > arr.length - 2) {
            console.log(arr[i]);
        }
    }
}
// console.log(storenumber);
// console.log(arr.length);
// console.log(count)