function filteredArray(arr,elem){
    let newArr = [];
    let tempArr = [];
    for(let i = 0;i<arr.length;i++){

        for(let j = 0;j<arr[i].length;j++){
            if(arr[i][j] !== elem){
                newArr.push(arr[i][j]);
            }
        }
        
    }
    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));