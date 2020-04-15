const notes = [{
    title:'my next trip',
    body:'I would like to go to Spain'
},{
    title:'Habbits to work on',
    body:'Exercise, eat a little better'
},{
    title:'Office modification',
    body:'Get a new seat'
}]

const filters = {
    searchText:''
}
const renderNotes = function(notes,filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    filteredNotes.forEach(function(note){
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    })
    
}
// renderNotes(notes,filters);

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})



document.querySelector('#remove-all').addEventListener('click',function(e){
    document.querySelector('#notes').innerHTML = '';
})
