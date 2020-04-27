function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];

    for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
   
              // Adds the m-th row into newArray
      row.push(0);
      }

    for (let i = 0; i < m; i++) {

      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
    }

    return newArray;
  }
  
  let matrix = zeroArray(3, 2);
  console.log(matrix);
  