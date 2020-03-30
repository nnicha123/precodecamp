const Car = require('./car');
const myCar = new Car(4,'red','Pick-up');
console.log(`My car's color is ${myCar.color}`);

const settings = require('./settings');
const databaseName = settings.databaseName;
const secretKey = settings.secretKey
console.log(databaseName);
console.log(secretKey);