const notes = ['Note 1','Note 2','Note 3'];
notes.push('My new note');
console.log(notes);
notes.pop()
console.log(notes);
notes.shift();
console.log(notes);
notes.unshift('New note');
console.log(notes);
notes.splice(1,2);
console.log(notes);
notes.unshift('Newnew','Note4');
console.log(notes);
notes.splice(1,0,'This is the new second item'); //Second argument 0 means can set this as second item
console.log(notes);