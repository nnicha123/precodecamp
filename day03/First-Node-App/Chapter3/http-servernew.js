const http = require('http');
const server = http.createServer(function(req,res){
    var obj = {
        name : 'Nicha',
        age : 24,
        city : 'Bangkkok'
    }
    if(req.url === '/'){
        res.write('You are at the home page');
        res.write('\n');
        res.write('Congrats!');
        res.write('\n');
        
    }
    if(req.url === '/contact'){
        res.write(JSON.stringify(obj));
        res.end();
    }
});
server.addListener('connection',function(socket){
    console.log('Client connected');
});
server.listen(5000);
console.log('Listening from port 5000');