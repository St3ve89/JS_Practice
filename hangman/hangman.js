// create a method for making a guess
// 1. should accept a character for guessing
// 2. should add unique guesses to list of guesses
// 3. should decrement the guesses left if a unique guess isn't a match

const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === '') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

// create a method for making a guess
Hangman.prototype.makeGuess = function (guess) {
    this.guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    // should add unique guesses to list of guesses
    if (isUnique) {
        this.guessedLetters.push(guess)
    }
    // should decrement the guesses left if a unique guess isn't a match
    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }

}

const game1 = new Hangman('cat', 2)


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log('remaining guesses',game1.remainingGuesses)
})