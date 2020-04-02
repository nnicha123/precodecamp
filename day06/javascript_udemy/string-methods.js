let name = 'Andrew Mead';
console.log(name.length);
console.log(name.toUpperCase());
console.log(name);
console.log(name.toLowerCase());
let password = 'abc123password098';
console.log(password.includes('password'));
console.log(name.trim());

let isValidPassword = function(password){
    if(password.length > 8 && !password.includes('password')){
        return true
    } else{
        return false;
    }
}
console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('1234passworddfseh'));