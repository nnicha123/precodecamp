const express = require('express');
const app = express();
app.get('/api',function(req,res){
    const myQueryString = req.query;
    if(Object.keys(myQueryString).length != 0){
        res.send(myQueryString);
    } else {
        res.send('Error 404 Page not found!!!');
    }
});
const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('Listening on port,',port);
});