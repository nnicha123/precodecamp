const fs = require('fs');
//Asynchronous
fs.readdir('./', function(err, files){
    if(err){
        console.log('We got this error: ', err);
    } else{
        console.log('List of files are: ', files);
    }
});
//Synchronous 
var file = fs.readdirSync('./');
console.log('Result is: ', file);
