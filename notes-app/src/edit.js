import { initEditPage, generateLastEdited } from './views'
import { updateNote, removeNote } from './notes'


const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const dataEl = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)

initEditPage(noteId)

titleEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        title: e.target.value
    })
    // update value on title change
    dataEl.textContent = generateLastEdited(note.updatedAt)
})

bodyEl.addEventListener('input', (e) => {
    const note = updateNote(noteId, {
        body: e.target.value
    })
    // update value on body change
    dataEl.textContent = generateLastEdited(note.updatedAt)
})

removeEl.addEventListener('click', (e) => {
    removeNote(noteId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        initEditPage(noteId)
    }
})