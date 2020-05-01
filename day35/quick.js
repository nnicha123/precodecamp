function quickSort(array) {
    // change code below this line
    let currentIndex = 0;
    let temp = 0;
    let count = 0;
    for(let i = 0;i<array.length;i++){
        if(array[i] < array[currentIndex] ){
            count++;
        }
    }
    temp = array[currentIndex];
    array[currentIndex] = array[count]; 
    array[count] = temp;
    // change code above this line
    return array;
  }
  
  // test array:
  console.log(quickSort([5,2,1,8,4,7,6,3]));
  // [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]