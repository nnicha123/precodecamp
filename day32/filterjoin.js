// The global variable
var globalTitle = " Winter Is   Coming";

// Only change code below this line
function urlSlug(title) {
  var arr = title.split(/\W/).filter(el => {return el !== ''})
  title = arr.join('-');
  return title.toLowerCase();
}
// Only change code above this line
console.log(urlSlug(globalTitle))