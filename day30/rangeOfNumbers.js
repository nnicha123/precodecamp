function rangeOfNumbers(startNum, endNum) {
    if(startNum  > endNum){
    return [];
  }
  else{
    const down = rangeOfNumbers(startNum +1,endNum);
    down.unshift(startNum );
    return down;
  }
};
console.log(rangeOfNumbers(6,9));