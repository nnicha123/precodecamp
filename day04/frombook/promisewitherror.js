const myPromise1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log('The first route to my home');
        resolve(1);
    },3000);
});
const myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('The second route to my home');
        reject(new Error('The second route Error!!'));
    },2000);
});
Promise.all([myPromise1,myPromise2])
.then((results)=>{
    console.log(results);
})
.catch((error)=>{
    console.log(error.message);
})
