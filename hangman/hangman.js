class Hangman {
    constructor(word, guessesLeft){
        this.word = word.toLowerCase().split('');
        this.guessesLeft = guessesLeft;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    get statusMessage(){
        let statusMessage;
        if(this.status === 'playing'){
            statusMessage = `Guesses left: ${this.guessesLeft}`
        } else if(this.status === 'finished'){
            statusMessage = 'Great work! You guessed the word'
        } else if(this.status === 'failed'){
            statusMessage = `Nice try! The word was "${this.word.join('')}"`
        }
        return statusMessage
    }
    calcStatus() {
        let finished = true
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter)) {} 
            else {
                finished = false
            }
        })
        if (this.guessesLeft === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        }
    }
    acceptChar(Char) {
        let acceptedChar = Char.toLowerCase();
        const isUnique = !this.guessedLetters.includes(acceptedChar)
        const isBadGuess = !this.word.includes(acceptedChar)
        if (this.status === 'playing') {
            if (isUnique) {
                this.guessedLetters.push(acceptedChar)
            }
            if (isUnique && isBadGuess) {
                this.guessesLeft--
            }
            this.calcStatus()
        }
        return this.guessedLetters
    }
    get puzzle(){
        let puzzle = '';
        if (this.status === 'playing') {
            this.word.forEach((letter) => {
                if (this.guessedLetters.includes(letter) || letter === ' ') {
                    puzzle += letter
                } else {
                    puzzle += "*"
                }
            })
        }
        return puzzle
    }
}


