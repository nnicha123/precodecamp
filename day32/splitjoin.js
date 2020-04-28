function sentensify(str) {
    // Only change code below this line
  var arr = str.split(/\W/);
  str = arr.join(' ');
  return str
    // Only change code above this line
  }
  console.log(sentensify("May-the-force-be-with-you"));