function frankenSplice(arr1, arr2, n) {
    // Add slice here to keep second array the same (slice doesn't change the original array)
    let newArr = arr2.slice();
    for(let i=0;i<arr1.length;i++){
        newArr.splice(n,0,arr1[i]);
        n++;
    }
    return newArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));