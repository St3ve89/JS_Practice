const Hangman = function(word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('cat', 3)

console.log(game1)

const game2 = new Hangman('London', 5)
console.log(game2);