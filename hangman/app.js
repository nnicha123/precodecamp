const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const resultEl = document.querySelector('#result')
const game1 = new Hangman('Cat toy', 2)
puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.guessesLeft
resultEl.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.acceptChar(guess)
    puzzleEl.textContent = game1.puzzle
    // guessesEl.textContent = game1.guessesLeft
    resultEl.textContent = game1.statusMessage
})