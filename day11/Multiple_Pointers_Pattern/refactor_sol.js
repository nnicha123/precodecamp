function sumZero(arr){
    let left_index = 0;
    let right_index = arr.length -1;
    while(left_index<right_index){
        let sum = arr[left_index] + arr[right_index];
        if(sum === 0){
            return [arr[left_index],arr[right_index]];
        } else if(sum >0){
            right_index--;
        }else{
            left_index++;
        }
    }
}
let arr2 = [-4,-3,-2,-1,0,1,2,5];
console.log(sumZero(arr2));