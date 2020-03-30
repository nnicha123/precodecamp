const students = [
    {'firstname':'Somchai', 'lastname':'Sudlor','age':50},
    {'firstname':'Somkid', 'lastname':'Susu','age':40},
    {'firstname':'Sira', 'lastname':'Jet','age':23},
]
console.log(students)
console.log(students[1])
console.log(students[1].lastname)
//Need to parse to JSON using this format
let myVar = JSON.parse('{"firstname":"Somchai"}');
console.log(myVar)