function getDigit(number, digit) {
    for (let i = 0; i < digit; i++) {
        number = parseInt(number / 10);
    }
    number = number % 10;
    return number;
}

console.log(getDigit(12345,3));

