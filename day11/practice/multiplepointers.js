function areThereDuplicates(...args){
    //sort arguments in order
    args.sort();
    console.log(args);
    //set up 2 pointer compare i to i+1;
    let point1 = 0;
    let point2 =1;
    while(point2 < args.length){
        if(args[point1] === args[point2]){
            return true;
        }
        point1++;
        point2++
    }
    return false;
    
}

console.log(areThereDuplicates(1,2,5,3,4,1));

// const arr = [1,2,4,2,1];
// arr.sort();
// console.log(arr);