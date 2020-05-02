let notes = getSavedNotes();

const filters = {
    searchText: ''
}
renderNotes(notes, filters)
document.querySelector('#create-note').addEventListener('click', function (e) {
    // e.target.textContent = 'The button was clicked'
    const id =uuidv4()
    notes.push({
        id: id,
        title:'',
        body:''
    })
    saveNotes(notes);
    location.assign(`./edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage',function(e){
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})

const now = moment()
console.log(now.toString())
// now.minute(5)
now.add(1,'year').add(1,'minute').subtract(20,'days')
console.log(now.toString())
console.log(now.format('dddd Do MMM YYYY'))
console.log(now.fromNow())
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