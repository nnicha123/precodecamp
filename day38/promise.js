// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback('The is the callback error')
    },2000)
}
getDataCallback((err,data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
// Promise
const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        // resolve('This is the promise data')
        reject('This is the reject')
    }, 2000);
})
// Gets called when data came through
myPromise.then((data) => {
    console.log(data)
},(err) =>{
    console.log(err)
})