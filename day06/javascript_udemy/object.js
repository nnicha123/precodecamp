let myBook = {
    title:'1984',
    author:'George Orwell',
    pageCount:326
}

console.log(myBook);
console.log(myBook.title);
console.log(`${myBook.title} by ${myBook.author}`);
myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);

let myInfo = {
    name:'Nicha',
    age:24,
    location:'Bangkok'
}

console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}`);
myInfo.age = myInfo.age + 1;
console.log(`${myInfo.name} is ${myInfo.age} and lives in ${myInfo.location}`);