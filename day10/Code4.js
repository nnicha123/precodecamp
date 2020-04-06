
let pal = function (num) {
    let sum = 0;
    let temp = num;
    let r = 0;
    while (num > 1) {
        r = num % 10;
        sum = (sum * 10) + r;
        num = parseInt(num / 10);
        // console.log(num);
    }
    if(temp == sum){
        return temp;
    }

}
// let r = pal(9009);
let max = 0;
for(var j = 1; j<999;j++){
    for (var i = 1; i < 999; i++) {
        mul = j * i;
        let check = pal(mul);
        if(check > max){
            max = check;
        }
    }
}
console.log(max);
