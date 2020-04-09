function merge(arr1,arr2){
    let arr_new = [];
    let point1 = 0;
    let point2 = 0;
    // let chosen = [];
    console.log(arr1.length)
    while(point2< arr2.length && point1<arr1.length){
        console.log(point1,point2);
        if(arr1[point1]<arr2[point2]){
            arr_new.push(arr1[point1]);
            point1 ++;
        } else{
            arr_new.push(arr2[point2]);
            point2++
        }
     }
     if(point1 !== arr1.length-1){
         chosen = arr1.slice(point1,arr1.length);
     } else{
        chosen = arr2.slice(point2,arr2.length);
     }
     console.log(chosen);
    arr_new.push(chosen);
    return arr_new;

}

console.log(merge([1,10,50,500,1000],[2,14,99,100]));