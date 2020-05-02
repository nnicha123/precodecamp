const titleELement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
//Get id not including hash
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined){
    location.assign('./index.html')
}

titleELement.value = note.title
bodyElement.value = note.body

titleELement.addEventListener('input',function(e){
    note.title = e.target.value
    saveNotes(notes)
})

bodyElement.addEventListener('input',function(e){
    note.body = e.target.value
    saveNotes(notes)
})

removeElement.addEventListener('click',function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('./index.html')
})
// add syncing to tabs
// window.addEventListener('storage',function(e){
//     debugger
// })
window.addEventListener('storage',function(e){
    if(e.key === "notes"){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteId
        })
        
        if(note === undefined){
            location.assign('./index.html')
        }
        
        titleELement.value = note.title
        bodyElement.value = note.body
    }
})

