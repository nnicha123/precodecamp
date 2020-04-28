// The global variable
var globalTitle = " Winter Is   Coming";

// Only change code below this line
function urlSlug(title) {
  var arrTitle = [...title];
  var newTitle = '';
  for(let i=0;i<arrTitle.length;i++){
      newTitle = newTitle + (arrTitle[i]);
  }
  
  return newTitle
    .split(/\W/)
    .filter(obj => {
      return obj !== "";
    })
    .join("-")
    .toLowerCase();
}
// Only change code above this line
console.log(urlSlug(globalTitle))