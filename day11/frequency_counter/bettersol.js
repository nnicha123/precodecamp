let character = "Your PIN number is 1234";

function charCount(str){
    var obj = {};
    for(var char of str){
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            // if(obj[char]>0){
            //     obj[char]++;
            // }else{
            //     obj[char] = 1;
            // }
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
console.log(charCount(character))
console.log("i".charCodeAt(0));