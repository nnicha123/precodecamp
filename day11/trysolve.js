let charCount = "Your PIN number is 1234";;
var result = {}
for (var i = 0; i < charCount.length; i++) {
    var char = charCount[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) {
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }

}
console.log(result)