function hello3(){
    return 1;
}
function tryHello3(callbackFunction){
    return callbackFunction();
}

console.log(hello3);
console.log(hello3());
console.log(tryHello3(hello3));
// console.log(tryHello3(hello3()));