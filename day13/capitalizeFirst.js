function capitalizeFirst(arr){
    var newstr = [];
    if(arr.length <= 0){
        return newstr;
    }
    newstr.push(arr[0].charAt(0).toUpperCase()+arr[0].slice(1)) 
    newstr = newstr.concat(capitalizeFirst(arr.slice(1)));
    return newstr;
}
console.log(capitalizeFirst(['car','taco','banana']));

// if(arr[0] %2 !== 0 ){
//     newArr.push(arr[0]);
// }
// newArr = newArr.concat(collectOddValues(arr.slice(1)));
// return newArr;

// let array = ['car','taco','banana'];
// let newarr = array[0].charAt(0).toUpperCase()+array[0].slice(1) 
// newarr = newarr.concat(array[1].charAt(0).toUpperCase()+array[1].slice(1));
// console.log(newarr);