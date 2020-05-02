let notes = getSavedNotes();

const filters = {
    searchText: ''
}
renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', function (e) {
    // e.target.textContent = 'The button was clicked'
    notes.push({
        id: uuidv4(),
        title:'',
        body:''
    })
    saveNotes(notes);
    renderNotes(notes,filters)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

//localStorage.setItem('location','Bangkok');
// console.log(localStorage.getItem('location'));
// localStorage.removeItem('location')
// const user = {
//     name:'Anrew',
//     age:27
// }
// const userJSON = JSON.stringify(user);
// console.log(userJSON)
// localStorage.setItem('user',userJSON);

// const userJSON = localStorage.getItem('user'); //before storing it in local need to stringify
// const user = JSON.parse(userJSON); //after read object
// console.log(`${user.name} is ${user.age}`);