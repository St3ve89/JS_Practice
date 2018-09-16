const puzzleEl = document.querySelector('.puzzle')
const guessesEl = document.querySelector('.guesses')
const game1 = new Hangman('car parts', 2)

// Display the puzzle to the browser instead of the console
puzzleEl.textContent = game1.puzzle

// display the guesses left to the browser instead of the console
guessesEl.textContent = game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

// Making an http request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()




const countryCode = 'MX'

// make new request for all countries
const countryRequest = new XMLHttpRequest()

countryRequest.addEventListener('readystatechange', e => {
    // parse the responseText to get back the array of objects
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        // find your country object by it's country code (alpha2Code property)
        const country = data.find(country => country.alpha2Code === countryCode)
        // print the full country name (name property)
        console.log(country.name)
    } else if (e.target.readyState === 4) {
        console.log('Unable to fetch data')
    }

})

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
countryRequest.send()