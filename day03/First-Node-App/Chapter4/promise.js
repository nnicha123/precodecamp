const p = new Promise(function (resolve, reject) {
    //Asynchronous operation
    setTimeout(function () {
        //statement
        resolve({ id: 1, "name": "Nicha" });
        reject(new Error('Error 404 Bad Request'));
    }, 2000);
});
console.log('Before Asynchronous operation');
p.then(function (result) {
    console.log('This is the result: ', result);
})
.catch(function(err){
    console.log(err.message);
});
console.log('After Asynchronous Operation');
