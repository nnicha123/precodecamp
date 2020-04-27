// Using objects should be easier counting frequency
function mutation(arr) {
    let arr1 = arr[1].split('');
    let arr2 = arr[0];

    let obj2 = {};
    for(let i = 0;i<arr2.length;i++){
        if(!obj2[arr2[i]]){
            obj2[arr2[i]] = 1;
        } else{
            obj2[arr2[i]]++;
        } 
    }
    for(let i = 0;i<arr1.length;i++){
        let letter = arr1[i];
        if(!obj2[letter]){
            return false;
        } else{
            obj2[letter]--;
        }
    }
    // console.log(obj2);
     return true;

  }
  
  console.log(mutation(["hello", "hey"]));
  