function sumRange(num){
    if(num === 1){
        return 1;
    }
    return num + sumRange(num-1);
}
console.log(sumRange(4));
//return 4 + sumRange(3)
//return 4 + 3 + sumRange(2)
//return 4 + 3 + 2 + sumRange(1)
//return 10