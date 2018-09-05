const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function (note) {
    return note.id === noteId
})

if (note === undefined) {
    location.assign('/index.html')
}

titleEl.value = note.title
bodyEl.value = note.body

titleEl.addEventListener('input', function (e) {
    note.title = e.target.value
    saveNotes(notes)
})

bodyEl.addEventListener('input', function (e) {
    note.body = e.target.value
    saveNotes(notes)
})

removeEl.addEventListener('click', function (e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

windows.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })
        
        if (note === undefined) {
            location.assign('/index.html')
        }
        
        titleEl.value = note.title
        bodyEl.value = note.body
    }
})