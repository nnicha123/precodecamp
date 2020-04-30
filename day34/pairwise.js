function pairwise(arr, arg) {
    // multiple pointers question
    let i = 0;
    let j = arr.length-1;
    let num =0;
    // Sort array first
    arr.sort((a,b) => {
        return a===b? 0:a>b? 1:-1;
    });
    while(i<=j && i>=0 && j<=arr.length-1){
        if((arr[i] + arr[j]) === arg){
            num += (i+j);
            console.log(i,j);
            i++;
        } else if((arr[i] + arr[j]) <= arg){
            i++;
        } else{
            j--;
        }
    }
    return num;
  }
  
 console.log(pairwise([1,4,2,3,0,5], 7));