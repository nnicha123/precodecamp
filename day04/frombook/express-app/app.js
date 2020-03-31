const expressFunction = require('express');
const expressApp = expressFunction();
expressApp.get('/',function(req,res){
    res.send('Hello World!');
});
expressApp.get('/api/resource',function(req,res){
    const myJson = {id:1,name:'Nicha'};
    res.send(myJson);
})
expressApp.listen(3000,function(){
    console.log('Listening on port 3000');
});