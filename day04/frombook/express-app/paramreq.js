const express = require('express');
const app = express();
const students = [
    {id:1,name:'Nicha'},
    {id:2,name:'Natcha'}
];
app.get('/api/students',function(req,res){
    res.send(students);
});
app.get('/api/students/:id',function(req,res){
    const id = req.params.id;
    if(id == 1){
        res.send(students[0]);
    } else if(id == 2){
        res.send(students[1]);
    } else {
        res.send('Error 404 not found');
    }
});
const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log('Listening on port',port);
});