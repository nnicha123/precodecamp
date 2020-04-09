// function isPalindrome(str){
    
//     if(str.length < 1 ){
//         return;
        
//     }

//     return (isPalindrome(str.slice(1)) + str[0] === str);
// }
// console.log(isPalindrome('awesome'));
// console.log(isPalindrome('foobar'));
// console.log(isPalindrome('tacocat'));

// let str = 'tacocat';
// let ans = str.substring(1,str.length-1);
// let result = (ans[0] === ans[ans.length-1]);
// console.log(result);

function isPalindrome(str){
    if(str.length<=1){
        return answer;
    }
    let answer =  str.slice(1,-1);
    return answer[0] === answer[answer.length-1];
}
console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanapanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));