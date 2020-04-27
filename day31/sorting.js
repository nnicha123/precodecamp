function getIndexToIns(arr, num) {
    arr.sort((a,b) => a-b);
    let position = 0;
    // Find position

        while(num > arr[position]){
            position++;
        }

    return position;
  }
  
  console.log(getIndexToIns([10,20,40, 60], 50));
  console.log(getIndexToIns([5, 3, 20, 3], 5));