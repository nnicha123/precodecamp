const Hangman = function(word, numMissed){
    this.word = word;
    this.numMissed = numMissed;
}

let hangman = new Hangman('Moment',4)
console.log(hangman)
let hangmantwo = new Hangman('Usually',3)
console.log(hangmantwo)