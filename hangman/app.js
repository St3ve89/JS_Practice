const puzzleEl = document.querySelector('.puzzle')
const guessesEl = document.querySelector('.guesses')
const game1 = new Hangman('cat', 2)

// Display the puzzle to the browser instead of the console
puzzleEl.textContent = game1.getPuzzle()

// display the guesses left to the browser instead of the console
guessesEl.textContent = game1.remainingGuesses

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
})