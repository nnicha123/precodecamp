function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    collection.map((val) => {
        return val.first;
    })
  
    // Only change code above this line
    // return obj1;
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));