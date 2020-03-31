const getStudent = (id) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let name;
            name = 'Nicha';
            if(name){
                resolve({id:id,name:name});
            } else{
                reject(new Error(`Cannot get the result`));
            }
        },2000);
    });
}

getStudent(3)
.then((res) => {
    console.log(res);
})
.catch((err)=> {
    console.log(err.message);
});