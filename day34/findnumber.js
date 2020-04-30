function findRepeat(arr,num){
    let i = arr.indexOf(num);
    let j = arr.indexOf(num);
    let total = 0;
    let temp;
    if(i === j){
        temp = i
        arr[i] = 1000;
        j = arr.indexOf(num);
    }
    total = j+ temp;
    return total;

}
//  console.log(pairwise([1,4,2,3,0,5], 7));
//  console.log(pairwise([1, 3, 2, 4], 4));
 console.log(findRepeat([1, 1, 1],1));
 console.log(findRepeat([0, 0, 0, 0, 1, 1],1));
//  console.log(pairwise([], 100));