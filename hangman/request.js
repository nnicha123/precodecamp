const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
    // Making an HTTP request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            resolve(data.puzzle)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
})

const getCountry = (alpha2Code) => new Promise((resolve, reject) => {
    // Making HTTP requests
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((el) => el.alpha2Code == alpha2Code)
            resolve(country)
        } else if (e.target.readyState === 4) {
            reject('An error has taken place')
        }
    })
    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
})



// // Synchronous response
// const getPuzzleSync = () => {
//     // Making an HTTP request
//     const request = new XMLHttpRequest()
//     // For synchronous argument set to false for sync
//     request.open('GET', 'http://puzzle.mead.io/slow-puzzle?wordCount=3',false)
//     request.send()
//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     } else if (request.readyState === 4) {
//         throw new Error('Things did not go well')
//     }
// }