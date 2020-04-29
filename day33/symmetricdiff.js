function sym(args) {
    let obj = {};
    let arr = [];
    for(let i=0;i<arguments.length;i++){
        arr.push(arguments[i]);
    }
    return arr;
    
  }
  
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));
  