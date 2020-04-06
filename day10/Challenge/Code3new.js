n = 600851475143;
while(n%2 ==0){
    max = 2;
    n = n/2;
}
// console.log(n);
// console.log(Math.sqrt(n));
for(i = 3;i<=Math.sqrt(n);i = i+2){
    while(n%i ==0){
        max = i;
        n = n/i;
        // console.log(max);
        // console.log(n)
    }
    if(n>2){
        max = n;
    }
    
}

console.log(max);