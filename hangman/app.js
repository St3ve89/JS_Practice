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
    if (e.target.readyState === 4) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle')
request.send()