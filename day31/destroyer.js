function destroyer(arr) {
    let obj = {};
    let newArr =[];

    for(let i=1;i<arguments.length;i++){
        obj[arguments[i]] = 1;
    }
    for(let i=0;i<arr.length;i++){
    
        if(!obj[arr[i]]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
  console.log(destroyer([2, 3, 2, 3], 2, 3));