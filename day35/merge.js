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

console.log(merge([1,10,50],[2,14,99,100]));