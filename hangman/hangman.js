const Hangman = function (word, guessesLeft) {
    this.word = word.toLowerCase().split('');
    this.guessesLeft = guessesLeft;
    this.guessedLetters = [];
    this.status = 'playing';
}

Hangman.prototype.calcStatus = function(){
    let finished = true
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter)){

        } else{
            finished = false
        }
    })

    if(this.guessesLeft === 0){
        this.status = 'failed'
    } else if(finished){
        this.status = 'finished'
    }
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
    this.calcStatus()
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



