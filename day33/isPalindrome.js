const isPalindrome = (str) => {
    let newstr = str;
    newstr = newstr.replace( /[^a-zA-Z0-9]/g, '');
    newstr = newstr.toLowerCase();
    console.log(newstr);
    let i = 0;
    let j = newstr.length-1;
    while(i <=j){
        if(newstr[i] !== newstr[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
    
}

console.log(isPalindrome("neVer odd or even"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("_eye"));
console.log(isPalindrome("A man, a plan, a canal. Panama"));
console.log(isPalindrome("not a palindrome"));