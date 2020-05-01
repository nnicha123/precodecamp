const pivotHelper = function(array,startIndex=0,endIndex=array.length-1){
    let startPivot = array[startIndex];
    let currentIndex = startIndex;
    let temp=0;
    for(let i=0;i<array.length;i++){
        if(startPivot > array[i]){
            currentIndex++;
            temp = array[i];
            array[i] = array[currentIndex];
            array[currentIndex] = temp;
        }
    }
    // swap first element to current index (finish)
    temp = array[currentIndex];
    array[currentIndex] = array[startIndex];
    array[startIndex] = temp;
    return currentIndex;
}

console.log(pivotHelper([5,2,1,8,4,7,6,3]));