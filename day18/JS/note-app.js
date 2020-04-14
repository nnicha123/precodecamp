const p = document.querySelector('p');
const h2 = document.querySelector('h2');


//Query and remove
const ps = document.querySelectorAll('p');
ps.forEach(function(p){
    p.remove();
})