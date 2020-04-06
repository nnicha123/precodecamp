
// console.log(max);
function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  
  let number = 1;
  let count = 0;
  while(count <10001){
    number = number +1;
    if(isPrime(number)){
        if(Math.sqrt(number)%1 != 0){
            count = count + 1;
            console.log(number)
        }

    }
    
  }