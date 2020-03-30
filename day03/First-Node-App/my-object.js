const myObject = require('./logger');
//console.log(myObject);
//Uses 'log' function from logger.js (which is public) to display text
myObject.log('Hello from another module');