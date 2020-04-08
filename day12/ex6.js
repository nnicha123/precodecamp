let str1 = "sing";
let str2 = "sting";
function isSubsequence(str1,str2){
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    // console.log(arr1);
    // console.log(arr2);
    let i = 0;
    let j = 0;
    let ending = Math.min(arr1.length,arr2.length)
    while(j<arr2.length-1){
        console.log(`${arr1[j]} and ${arr2[i]}`);
        if(arr2[i] !== arr1[j]){
            i++
            
        } else{
            i++;
            j++;
        } 
    }
    return true;

}

// isSubsequence('hello','htello');

console.log(isSubsequence("hello","hello world"));
console.log(isSubsequence('sing','sting'));
console.log(isSubsequence('abc','abracadabra'));
console.log(isSubsequence('abc','acb'));
// console.log(isSubsequence('hello','tttthello'));