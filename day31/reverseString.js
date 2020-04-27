function reverseString(str){
    let arr = str.split('');
    let newarr = [];
    while(arr.length>0){
        let popped = arr.pop();
        newarr += popped;
    }
    return newarr;
}

console.log(reverseString('Hello'));