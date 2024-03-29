//Begin and End is synchronous, First-Third is asynchronous need to wait for call stack to be empty first
//Ones returning ...Async are async operations
const myAsync = (callback) => {
    console.log('Begin');
    setTimeout(() => {
        const result = callback('First');
        console.log(result);
    }, 2000);
    setTimeout(() => {
        const result = callback('Second');
        console.log(result);
    },1000);
    setTimeout(()=> {
        const result = callback('Third');
        console.log(result);
    },0);
    console.log('End')
}

myAsync((message) => {
    return message + ' Async';
});