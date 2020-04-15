const p = document.querySelector('p');
const h2 = document.querySelector('h2');
const h3 = document.querySelectorAll('h3');

// //Query and remove
// const ps = document.querySelectorAll('p');
// ps.forEach(function(p){
//     p.remove();
// })

const hs = document.querySelectorAll('h2');
hs.forEach(function(h2){
    console.log(h2.textContent)
})

const h3s = document.querySelectorAll('h3');
h3s.forEach(function(h3){
    h3.textContent = "YOYOYOYO"
})

document.querySelector('#create-note').addEventListener('click',function(e){
    console.log('Did this work');
    console.log(e);
    e.target.textContent = 'The button was clicked'
})
document.querySelector('#remove-all').addEventListener('click',function(e){
    console.log('delete all notes')
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    });
})
//Using input
document.querySelector('#search-text').addEventListener('input',function(e){
    console.log(e.target.value);
})

//Using change
document.querySelector('#todo-list').addEventListener('change',function (e){
    console.log(e.target.value)
}) 
