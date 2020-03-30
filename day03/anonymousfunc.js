let hello = function(parameter1,parameter2,parameter3){
    console.log('hello' + parameter1 + parameter2 + parameter3);
};
function func(callback){
    callback('1','2','3');
}
func(hello);