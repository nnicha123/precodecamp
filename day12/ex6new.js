function isSubsequence(str1, str2) {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    //make object to count values
    let obj = {}
    let lastval = arr1[arr1.length -1];

    for (let value of arr1) {
        obj[value] = (obj[value] || 0) + 1;
    }
    let i = 0;
    let j = 0;
    while (j < arr2.length) {
        // console.log(`${arr1[i]} and ${arr2[j]}`);
        if (arr1[i] === arr2[j]) {
            let val = arr1[i];
            obj[val] = obj[val]-1;
            i++;
            j++;
        } else {
            j++;
        }
    }
    // console.log(lastval);
    if(obj[lastval] !== 0 ){
        return false;
    } return true;
}
console.log(isSubsequence('abc','abracadabra'));
console.log(isSubsequence('abc','acb'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence("hello","hello world"));
