function getDigit(num,digit){
    
}

let number = 12345;
let digit = 1;
let getdigit = 4;
for(let i = 0;i<getdigit;i++){
    number = parseInt(number/10);
}
let newnum = number%10;
console.log(newnum);
