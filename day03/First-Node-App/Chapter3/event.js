const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('myEvent',function(args){
    console.log('Hello I found you: myEvent');
});
emitter.emit('myEvent');
//Passing arg
const emm = new EventEmitter();
emm.on('newEvent',function(args){
    console.log('You met newEvent with: ',args);
});
emm.emit('newEvent',{id:1,name:'Nicha'});
const emmm = new EventEmitter();
emmm.on('eee',function(arg1,arg2){
    console.log('You met with: ', arg1,arg2)
});
emmm.emit('eee',1,'Nicha');