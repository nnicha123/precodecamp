const notes = [{
    title:'My next trip',
    body: 'I would like to go to Spain'
},{
    title:'My habbits to work on',
    body: 'Exercise. Eating abit better'
},{
    title: 'Office modification',
    body:'Get a new seat'
}]

const filteredNotes = notes.filter(function(note,index){
    const isTitleMatch = note.title.toLowerCase().includes('office')
    const isBodyMatch = note.body.toLowerCase().includes('office')
    return isTitleMatch || isBodyMatch
})
// console.log(filteredNotes);

const findNotes = function(note,query){
    return notes.filter(function(note,index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

console.log(findNotes(notes,'office'));