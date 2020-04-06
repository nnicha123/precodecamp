
let seven = function(num){
    let temp = num;
    let divnum = parseInt(num/10);
    let lastdigit = (num%10);
    let final = (divnum- 2*lastdigit);
    if(final%7 == 0){
        return "Divisible by 7";
    }

}
let trynum = seven(2520);
console.log(trynum)

// let multi = 1;
// for(var i = 1;i<=20;i++){
//  multi = multi*i;
// }
// console.log(multi);
// multi = multi/(20*19*18*3*2);
// console.log(multi);