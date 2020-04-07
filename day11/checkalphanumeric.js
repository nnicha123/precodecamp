

let character = "Your PIN number is 1234";

function charCount(str){
    let obj = {};
    for(var char of str){
        if(isAlphaNumeric(char)){
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
           
        }
    }
    return obj
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code>47 && code<58) && !(code>64 && code<91) && !(code>96 && code<123)){
        return false;
    }
    return true;
}

// console.log(isAlphaNumeric("/")); //returns false
// console.log(isAlphaNumeric("a")); //returns true
console.log(charCount(character))
