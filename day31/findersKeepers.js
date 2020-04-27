function findElement(arr, func) {
    let num = 0;
    let count = 0;
    while(count < arr.length){
      if(func(arr[count])){
        return arr[count];
      }
      count++;
    } return undefined;
    
  }
  
  console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));