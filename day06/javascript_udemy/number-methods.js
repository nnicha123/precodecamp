let num = 103.941;
console.log(num.toFixed(2));
let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random()*(max-min)) + min;
console.log(randomNum);

let makeGuess = function(guess){
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() + (max-min + 1)) +1;
    return guess === randomNum;
}

console.log(makeGuess(1));