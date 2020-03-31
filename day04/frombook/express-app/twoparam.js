const express = require('express');
const app = express();
app.get('/api/:school/:id',function(req,res){
    const data = req.params;
    if(data){
        res.send(data);
    } else {
        res.send('Error 404 Page Not Found!');
    }
});
const port = process.env.PORT || 3000;
app.listen(port,function(){
    console.log('Listening on port ',port);
});