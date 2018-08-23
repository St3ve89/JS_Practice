const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now new Note 3'


// notes.forEach(function(item, index){
//     console.log(item)
//     console.log(index)
// })

console.log(notes.length)
console.log(notes)

const index = notes.findIndex(function(note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})

console.log(index)