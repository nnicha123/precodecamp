function areThereDuplicates(){
    let arr = [];
    let obj = {};
    if(arguments.length === 0){
        return null;
    }
    //do freq
    for(let num of arguments){
        obj[num] = (obj[num] || 0) +1;
        if(obj[num] > 1){
            return true;
        }
    }
    return false;
}
console.log(areThereDuplicates(1,2,3));
