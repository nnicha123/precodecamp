function frankenSplice(arr1, arr2, n) {
    // console.log(arr2.splice(n));
    let newArr = [];
    let spliced = arr2.splice(n);
    newArr.push(arr2);
    newArr.push(arr1);
    newArr.push(spliced);
    return newArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));