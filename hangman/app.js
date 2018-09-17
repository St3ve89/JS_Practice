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

getPuzzle("3",(error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

// make the http request and call the callback with country information
getCountry('GB', (error, country) => {
    if (error) {
        console.log(error)
    } else {
        // use the callback to print the country name
        console.log(`Country name: ${country.name}`)
    }
})
