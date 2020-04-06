let sum_square = function(n){
    let sum = 0;
    for(i = 1;i<=n;i++){
        sum = sum + (i*i);
    }
    return sum;
}

let square_sum = function(n){
    let sum = 0;
    for(i=1;i<=n;i++){
        sum = sum + i;
    }
    return sum*sum;
}
let answer = square_sum(100) - sum_square(100);
console.log(answer);