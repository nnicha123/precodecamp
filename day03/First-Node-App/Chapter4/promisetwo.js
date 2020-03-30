const getStudent = (id,callback) => {
    setTimeout(() => {
        const name = 'Nicha';
        callback({id:id, name:name});
    },2000);
    
}

const result = getStudent(3,(result) => {
    console.log(result);
})