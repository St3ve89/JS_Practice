class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        // setup new "status" property with initial value of "playing"
        this.status = 'playing'
    }
// create method for recalculating status to playing, finished, or failed
    calculateStatus() {
        const finished = this.word.every( letter =>  this.guessedLetters.includes(letter))

        if (this.remainingGuesses === 0) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
// setup a new method to get back a status message
    getStatusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}".`
        } else {
            return 'Great work! You guessed the word.'
        }
    }

    getPuzzle() {
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
    makeGuess(guess) {
        this.guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        // disable new guesses unless 'playing'
        if (this.status !== 'playing') {
            return
        }

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
}


// create method for recalculating status to playing, finished, or failed
// Hangman.prototype.calculateStatus = function () {
//     const finished = this.word.every( letter =>  this.guessedLetters.includes(letter))
    
    
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

//     if (this.remainingGuesses === 0) {
//         this.status = 'failed'
//     } else if (finished) {
//         this.status = 'finished'
//     } else {
//         this.status = 'playing'
//     }
// }

// setup a new method to get back a status message
// Hangman.prototype.getStatusMessage = function () {
//     if (this.status === 'playing') {
//         return `Guesses left: ${this.remainingGuesses}`
//     } else if (this.status === 'failed') {
//         return `Nice try! The word was "${this.word.join('')}".`
//     } else {
//         return 'Great work! You guessed the word.'
//     }
// }

// Hangman.prototype.getPuzzle = function () {
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if (this.guessedLetters.includes(letter) || letter === '') {
//             puzzle += letter
//         } else {
//             puzzle += '*'
//         }
//     })

//     return puzzle
// }

// create a method for making a guess
// Hangman.prototype.makeGuess = function (guess) {
//     this.guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)
//     // disable new guesses unless 'playing'
//     if (this.status !== 'playing') {
//         return
//     }

//     // should add unique guesses to list of guesses
//     if (isUnique) {
//         this.guessedLetters.push(guess)
//     }
//     // should decrement the guesses left if a unique guess isn't a match
//     if (isUnique && isBadGuess) {
//         this.remainingGuesses--
//     }

//     this.calculateStatus()
// }