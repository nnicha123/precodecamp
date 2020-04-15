const p = document.querySelector('p');
//Query and remove
const ps = document.querySelectorAll('p');
ps.forEach(function(paragraph){
   if(paragraph.textContent.includes('the')) {
       paragraph.remove();
   }
})