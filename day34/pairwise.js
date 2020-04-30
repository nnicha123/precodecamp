function pairwise(arr, arg) {
    // multiple pointers question
    let i = 0;
    let j = arr.length-1;
    let num =0;
    let temp;
    // so old array don't get mutated -> Will use old array later on for getting index
    let newArr = [...arr];

    // Sort array first to be able to use multiple pointers approach
    newArr.sort((a,b) => {
        return a===b? 0:a>b? 1:-1;
    });
    if(arr.length <= 0){
        return 0;
    }
    while(i<j && i>=0 && j<=newArr.length-1){
        // console.log(arr.indexOf(newArr[i]),arr.indexOf(newArr[j]))
        //     console.log(num)
        if((newArr[i] + newArr[j]) === arg){
            // console.log(arr.indexOf(newArr[i]),arr.indexOf(newArr[j]))
            // console.log(num)
            if(arr.indexOf(newArr[i]) === arr.indexOf(newArr[j]))
            {
                temp = arr.indexOf(newArr[i]);
                arr[arr.indexOf(newArr[i])] = 123;
                num += (temp+arr.indexOf(newArr[j]));
            } else{
                num += (arr.indexOf(newArr[i])+arr.indexOf(newArr[j]));
            }
            // console.log(arr.indexOf(newArr[i]),arr.indexOf(newArr[j]))
            i++;
        } else if((newArr[i] + newArr[j]) <= arg){
            i++;
        } else{
            j--;
        }
      
    }
    return num;
  }
  
 console.log(pairwise([1,4,2,3,0,5], 7));
 console.log(pairwise([1, 3, 2, 4], 4));
 console.log(pairwise([1, 1, 1], 2));
 console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
 console.log(pairwise([], 100));