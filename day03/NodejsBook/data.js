const fs = require('fs');
fs.writeFileSync('test.txt','Name: ');
fs.appendFileSync('test.txt','Nicha');

//Global vs local

var Name = 'Nicha';
var Password = "123";
global.console.log(global.Name);
global.console.log(global.Password);
//var is local (local variable) 
//(name & password stored in local so both global.Name & global.Password will show undefined)
global.console.log(Name);
global.console.log(Password);