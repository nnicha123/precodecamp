const Hangman = function(word, numMissed,guessedLetters = []){
    this.word = word.toLowerCase().split('');
    this.numMissed = numMissed;
    this.guessedLetters = guessedLetters;
}

Hangman.prototype.getPuzzle = function(){
    let guesses = '';
    this.guessedLetters.forEach((guess) => {
        guesses +=  ` ${guess}`
    })
    return `You guessed` + guesses
}

let hangman = new Hangman('Moment',4,['a','e','i'])
console.log(hangman.getPuzzle())
let hangmantwo = new Hangman('Usually',3)
console.log(hangmantwo)

let testWord = 'test';
console.log(testWord.split(''))