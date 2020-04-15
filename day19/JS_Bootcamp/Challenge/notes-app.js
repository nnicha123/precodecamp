
const ps = document.querySelectorAll('p');

ps.forEach(function(p){
    p.textContent = '************'
})
//Add a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new element from javascript'
//Not censored in ps.foreach because added after that code;
document.querySelector('body').appendChild(newParagraph);