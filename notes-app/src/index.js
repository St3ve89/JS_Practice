import { getNotes, createNote, removeNote, updateNote } from './notes'
import { getFilters, setFilters } from './filters'



// console.log(getNotes())
// // createNote()
// removeNote('68c08261-3658-4ce0-9384-63372244525f')

// updateNote('2c931800-8f66-41e0-a6e4-f6d43eea9445', {
//     title: 'My note title',
//     body: 'This is the body for my note.'
// })
// console.log(getNotes())

console.log(getFilters())
setFilters({
    searchText: 'Office',
    sortBy: 'byCreated'
})
console.log(getFilters())