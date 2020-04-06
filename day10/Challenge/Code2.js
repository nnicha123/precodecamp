let sum = 0;
let one = 1;
let two = 2;
let three = 3;
 for(var count = 0;count<100;count++){
    one = two;
    two = three;
    three = one + two;
    // console.log(three);
    if(three < 4000000 && three%2 == 0){
        sum = sum + three;
    }
    
 }
 sum = sum+2
// console.log(one);
// console.log(two);
console.log(sum);