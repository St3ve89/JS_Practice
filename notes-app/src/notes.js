import uuidv4 from 'uuid/v4'
import moment from 'moment'

let notes = []

// read existing notes from local storage
const loadNotes = () => {
    const notesJSON = localStorage.getItem('notes')
    
    // handling application error
    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
}

// save the notes to local storage
const saveNotes = () => {
    localStorage.setItem('notes', JSON.stringify(notes))
}


// expose notes from module
const getNotes = () => notes

const createNote = () => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes()
}

notes = loadNotes()

export { getNotes, createNote }