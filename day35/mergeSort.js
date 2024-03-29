function merge(arr1,arr2){
    let i = 0;
    let j = 0;
    let arr = [];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++;
        }
    }
    // check remaining elements;
    if(i < arr1.length){
        for(let k=i;k<arr1.length;k++){
            arr.push(arr1[k]);
        }
    } 
    if(j < arr2.length){
        for(let k=j;k<arr2.length;k++){
            arr.push(arr2[k]);
        }
    } 
    return arr;
}

function mergeSort(array){
    // Split in halve;
    while(array.length>1){
        let midPt = Math.floor(array.length/2);
        let left = mergeSort(array.slice(0,midPt));
        let right = mergeSort(array.slice(midPt));
        console.log(array.length);
        return merge(left,right);
    }
    return array
}

console.log(mergeSort([1,100,13,12,50,9,100]));