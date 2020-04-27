let ohStr = "Ohhh no";
let ohRegex = /h{3,6}/g;
let result = ohRegex.test(ohStr);
console.log(result);