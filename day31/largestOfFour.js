function largestOfFour(arr){
    let newArr = [];
    let max = Number.NEGATIVE_INFINITY;
    for(let i = 0;i<arr.length;i++){
        max = Number.NEGATIVE_INFINITY;
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j] > max){
                max = arr[i][j];

            }
        }
        newArr[i] = max;

    }
    return newArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));