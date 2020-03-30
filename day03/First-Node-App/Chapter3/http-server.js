const http = require('http');
const server = http.createServer();

server.addListener('connection',function(socket){
    console.log('Client connected');
});
server.listen(5000);
console.log('Listening from port 5000');