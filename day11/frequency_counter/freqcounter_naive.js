function same(arr1,arr2){
    if(arr1.length != arr2.length){
        return false;
    }
    for(let i = 0; i<arr1.length;i++){
        let correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2)
        arr2.splice(correctIndex,1)
    }
    return true
}

let array1 = [1,2,3,2,5];
let array2 = [4,9,1,4,1];
same(array1,array2);