const notes = ['Note 1', 'Note 2', 'Note 3']


// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

notes[2] = 'This is now new Note 3'


notes.forEach(function(item, index){
    console.log('item',item)
    console.log('index',index)
})

// console.log(notes.length)
// console.log(notes)


for(let i = 2; i >= 0; i--){
    console.log(i)
}

for (let i = 0; i < notes.length; i++) {
    console.log(notes[i])
}