function validAnagram(ann1,ann2){
    let obj = {};
    for(let i = 0;i<ann1.length;i++){
        let letter = ann1[i];
        obj[letter]? obj[letter]+=1 : obj[letter]=1;
    }

    for(let i=0;i<ann2.length;i++){
        let letter = ann2[i];
        if(!obj[letter]){ //value will be equal to 0 if letter does not exist e.g. 'l', no 'l' in ann1 so l:0
            return false;
        } else{
            obj[letter] -= 1;
        }
    }
    return true;
}
console.log(validAnagram('arra','aarr'));
