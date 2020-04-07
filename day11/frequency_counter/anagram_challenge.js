
function validAnagram(ann1,ann2){
    let obj1 = {};
    let obj2 = {};
    if(ann1.length !== ann2.length){
        return false;
    }
    for(let value of ann1){
        obj1[value] = (obj1[value] || 0) + 1;
    }
    for(let value of ann2){
        obj2[value] = (obj2[value] || 0) +1;
    }
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true;
}

console.log(validAnagram('',''))

