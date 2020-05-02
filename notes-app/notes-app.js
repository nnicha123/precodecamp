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
//Unix Epoch - January 1st 1970 00:00:00
//(date before this is negative and after this is negative) -> represented in negative
const now = new Date()
// console.log(now.getTime()) -> is the number of milliseconds since epoch (if not specified) 
const timeStamp = now.getTime()

// convert back to date
const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

const firstDate = new Date('April 27 2019')
const secondDate = new Date('May 5 2013')

const timeStampOne = firstDate.getTime()
const timeStampTwo = secondDate.getTime()

console.log(timeStampOne,timeStampTwo)

if(timeStampOne<timeStampTwo){
    console.log(firstDate.toString())
} else if(timeStampTwo<timeStampOne){
    console.log(secondDate.toString())
}

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