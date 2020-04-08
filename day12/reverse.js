// function collectOddValues(arr){
//     let newArr = [];
//     if(arr.length === 0 ){
//         return newArr;
//     }
//     if(arr[0] %2 !== 0 ){
//         newArr.push(arr[0]);
//     }
//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// console.log(collectOddValues([1,2,3,4,5]));

function reverse(str) {
    let newstr = [];
    if (str.length === 0) {
        return newstr;
    }
    newstr.push(str[str.length - 1]);

    return newstr + (reverse(str.slice(0, -1)));
}

console.log(reverse('awesome'));
