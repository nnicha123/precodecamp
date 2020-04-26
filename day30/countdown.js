function countdown(n){
    if(n <=1){
      return [1];
    }
    else{
      const down = countdown(n-1);
      down.unshift(n);
      return down;
    }
}
console.log(countdown(5));