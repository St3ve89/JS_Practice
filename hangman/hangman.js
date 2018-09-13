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
// guess c, t, z
game1.makeGuess('c')
game1.makeGuess('t')
game1.makeGuess('z')
console.log(game1.getPuzzle()) // should see this c*t
// print remaining guesses (should be 1)
console.log('remaining guesses',game1.remainingGuesses)
const game2 = new Hangman('London', 4)
// guess l
game2.makeGuess('l')
console.log(game2.getPuzzle()); // should see this L*****
console.log('remaining guesses',game2.remainingGuesses)
