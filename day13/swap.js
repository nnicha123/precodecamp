function swap(arr,idx1,idx2){
    var temp = arr[idx1];
    arr[indx1] = arr[idx2];
    arr[idx2] = temp;
}

const swap_new = (arr,idx1,idx2) =>{
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
}