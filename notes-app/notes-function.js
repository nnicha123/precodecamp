'use strict'

//Read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    try{
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch(e){
        // if data invalid return empty array
        return []
    }
 
}
// Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)
    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

//Generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    textEl.href = "./edit.html"
    const button = document.createElement('button')

    //Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () => {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })
    //Setup note title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href',`./edit.html#${note.id}`)
    noteEl.appendChild(textEl)
    return noteEl;
}

//Render notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes,filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach((note) => {
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl)
    })
}

// Sort your notes by one of 3 ways
const sortNotes = (notes,sortBy) => {
    if(sortBy === 'byEdited'){
        return notes.sort((a,b) =>{
            if(a.updatedAt > b.updatedAt){
                return -1
            } else if(a.updatedAt < b.updatedAt){
                return 1
            } else{
                return 0
            }
        })
    } else if (sortBy === 'alphabetical'){
        return notes.sort((a,b) => {
            if(a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else{
                return 0
            }
        })
    } else if(sortBy === 'byCreated'){
        return notes.sort((a,b) => {
            if(a.createdAt > b.createdAt){
                return -1
            } else if(a.createdAt < b.createdAt){
                return 1
            } else{
                return 0
            }
        })
    } else{
        return notes
    }
}

//Save notes
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Generate last edited message
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
