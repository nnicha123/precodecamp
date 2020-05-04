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
const getDataPromise = (data) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`This is my success data: ${data}`)
        }, 2000);
    })
} 
// Gets called when data came through
const myPromise = getDataPromise(123)
myPromise.then((data) => {
    console.log(data)
},(err) =>{
    console.log(err)
})

const promise2 = getDataPromise(246)
promise2.then((data) => {
    console.log(data)
},(err) =>{
    console.log(err)
})