

var i = 2520;
var count = 0;
    let isDivisible = true;
    for (var j = 11; j <= 20; j++) {
        // find out if divisible by original number
        if (i % j != 0) {
         // find out if even, if even try to divide by i/2 see if divisible
         if(j%2!=0 && (j/2)%2 != 0){
            i = i*j;
         } else{
             count = count + 1;
         }
        }
    }
    let inew = i*2;
    console.log(inew)
 
