function sameFrequency(num1,num2){
    let obj = {};
    //convert numbers to arrays
    let arr1 = num1.toString().split('').map(Number);
    let arr2 = num2.toString().split('').map(Number);
    for(let num of arr1){
        obj[num] = (obj[num] || 0) +1;
    }
    for(let num of arr2){
        if(!obj[num]){
            return false;
        } else{
            obj[num]-=1;
        }
    }
    return true;
}
console.log(sameFrequency(1832,2238));
