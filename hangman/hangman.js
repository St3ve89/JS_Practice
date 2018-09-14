const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    // setup new "status" property with initial value of "playing"
    this.status = 'playing'
}

// create method for recalculating status to playing, finished, or failed
Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every( letter =>  this.guessedLetters.includes(letter))
    
    
    // const lettersUngessed = this.word.filter(letter => {
    //     return !this.guessedLetters.includes(letter)
    // })

    // const finished = lettersUngessed.length === 0


    // let finished = true

    // this.word.forEach(letter => {
    //     if (this.guessedLetters.includes(letter)) {

    //     } else {
    //         finished = false
    //     }
    // })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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

    this.calculateStatus()
}