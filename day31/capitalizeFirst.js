function titleCase(str) {
    let newStr = [];
    let arr = str.split(' ');
    for(let i =0;i<arr.length;i++){
        // console.log(arr[i]);
        newStr[i] = arr[i][0].toUpperCase() + (arr[i].slice(1)); 
    }
    return newStr.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));
  