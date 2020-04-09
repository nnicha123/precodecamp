function selection(arr){
    let min_index = 0;
    let comp_index = 0;
    let temp = 0;
    for(let i = min_index;i<arr.length;i++){
        if(arr[min_index] > arr[i]){
            comp_index = i;
        } else{
            comp_index = min_index;
        }
        arr[temp] = arr[comp_index];
        arr[comp_index] = arr[min_index];
        arr[min_index] = arr[temp];
        
    }
    return arr;
}

console.log(selection[5,3,3,8,9]);