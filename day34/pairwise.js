function pairwise(arr, arg) {
    // multiple pointers question
    let i = 0;
    let j = arr.length-1;
    let num =0;
    // so old array don't get mutated -> Will use old array later on for getting index
    let newArr = [...arr];

    // Sort array first to be able to use multiple pointers approach
    newArr.sort((a,b) => {
        return a===b? 0:a>b? 1:-1;
    });
    while(i<=j && i>=0 && j<=newArr.length-1){
        if((newArr[i] + newArr[j]) === arg){
            num += (arr.indexOf(newArr[i])+arr.indexOf(newArr[j]));
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