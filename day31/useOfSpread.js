// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (bookList,bookName) {
    // Use spread operator otherwise if directly assign it is like a pointer and changes made in newList will
    // Effect bookList too 
  let newList = [...bookList];
  newList.push(bookName);
  return newList;
  
  // Change code above this line
}

// Change code below this line
function remove (bookList,bookName) {
  let newList = [...bookList];
  var book_index = newList.indexOf(bookName);
  if (book_index >= 0) {

    newList.splice(book_index, 1);
    return newList;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
