const Hangman = function (word, guessesLeft) {
    this.word = word.toLowerCase().split('');
    this.guessesLeft = guessesLeft;
    this.guessedLetters = [];
}

Hangman.prototype.acceptChar = function (Char) {
    let acceptedChar = Char.toLowerCase();
    const isUnique = !this.guessedLetters.includes(acceptedChar)
    const isBadGuess = !this.word.includes(acceptedChar)
    if (isUnique) {
        this.guessedLetters.push(acceptedChar)
    }

    if (isUnique && isBadGuess) {
        this.guessesLeft--
    }
    return this.guessedLetters
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    })
    return puzzle
}

const game1 = new Hangman('Cat', 2)


window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.acceptChar(guess)
    console.log(game1.getPuzzle())
    console.log(game1.guessesLeft)
})