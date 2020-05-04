// HTTP (Hyper Text Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

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

// Making an HTTP request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if(e.target.readyState === 4){
        console.log('An error has taken place')
    }
})
request.open('GET','http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryRequest = new XMLHttpRequest()
countryRequest.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState ===4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        const country = data.find((element) => element.alpha2Code == 'TH')
        console.log(country.name)
    } else if(e.target.readyState ===4){
        console.log('Unable to fetch data')
    }
})

countryRequest.open('GET','http://restcountries.eu/rest/v2/all')
countryRequest.send()
