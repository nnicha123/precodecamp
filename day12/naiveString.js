function naiveString(long,short){
    var count = 0;
    for(var i= 0;i<long.length;i++){
        for(var j=0;j<short.length;j++){
            console.log(short[j],long[i+j]);
            if(short[j] !== long[i+j]){
                console.log('BREAK');
                break;
            }
            if(j === short.length -1){
                console.log('FOUND ME!');
                count++;
            }
        }
    }
    return count;
}

console.log(naiveString("lorilole loled","lol"));