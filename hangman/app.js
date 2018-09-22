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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// make the http request and call the callback with country information
getCountry('HU').then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//     if (response.status === 200) {
//         return response.json()
//     } else {
//         throw new Error('Unable to fetch the puzzle')
//     }
// }).then( (data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })
