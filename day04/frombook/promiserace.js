const myPromise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('link1');
        resolve(1);
    },3000)
});
const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('link2');
        resolve(2);
    },2000);
});
Promise.race([myPromise1,myPromise2])
.then((results)=>{
    console.log(results);
})
.catch((error)=>{
    console.log(error.message);
})