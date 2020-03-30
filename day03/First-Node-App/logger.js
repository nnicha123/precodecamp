const url = 'https://iosthailand.com'
function log(message){
    console.log(message)
}
//To make sure public (can be accessed by other modules)
module.exports.log = log;
console.log(module);