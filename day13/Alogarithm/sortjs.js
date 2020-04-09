let str = ['Steele','Colt','Data Structures','Alogarithms'];
let num = [6,4,15,10];
//works with str but not numbers so need to tell it how
console.log(str.sort());
console.log(num.sort());

//for ascending
function numberCompare(num1,num2){
    return num1-num2;
}
console.log(num.sort(numberCompare));
//for descending
function numberCompare2(num1,num2){
    return num2-num1;
}
console.log(num.sort(numberCompare2));
//sort by str length
function compareByLen(str1,str2){
    return str2.length - str1.length;
}
console.log(str.sort(compareByLen));