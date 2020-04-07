function same(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1
        console.log(frequencyCounter1);
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
        console.log(frequencyCounter2);
    }
    for(let key in frequencyCounter1){
        if(!(key **2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

let array1 = [1,2,3,4];
let array2 = [4,16,9,1];
console.log(same(array1,array2));