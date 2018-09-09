const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const dataEl = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

titleEl.value = note.title
bodyEl.value = note.body
// set text value: last edit 4 hours ago
dataEl.textContent = generateLastEdited(note.updatedAt)

titleEl.addEventListener('input', (e) => {
    note.title = e.target.value
    // Update updateAt when someone edits a title
    note.updatedAt = moment().valueOf()
    // update value on title change
    dataEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value
    // Update updateAt when someone edits a body
    note.updatedAt = moment().valueOf()
    // update value on body change
    dataEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeEl.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        
        if (!note) {
            location.assign('/index.html')
        }
        
        titleEl.value = note.title
        bodyEl.value = note.body
        // update value on storage change
        dataEl.textContent = generateLastEdited(note.updatedAt)
    }
})