const Hangman = function(word, numMissed){
    this.word = word.toLowerCase().split('');
    this.numMissed = numMissed;
    this.guessedLetters = ['u','a'];
}

Hangman.prototype.getPuzzle = function(){
    let puzzle = '';
    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        }else{
            puzzle += "*"
        }
    })
    return puzzle
}

let hangman = new Hangman('Moment',4,['a','e','i'])
console.log(hangman.getPuzzle())
let hangmantwo = new Hangman('Usually',3)
console.log(hangmantwo.getPuzzle())
