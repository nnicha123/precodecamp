const path = require('path');
const pathObject = path.parse(__filename);
console.log(pathObject);
;
const os = require('os');
var freeMemory = os.freemem();
console.log(freeMemory);
var user = os.userInfo();
console.log(user);