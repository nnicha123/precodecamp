// Inventory challenge
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired
    let obj1 = {};
    let key = [];
    let value = [];
    for(let i =0;i<arr1.length;i++){
        key[i] = arr1[i][0];
        value[i] = arr1[i][1];
        obj1[key[i]] = value[i];
    }

    for(let i=0;i<arr2.length;i++){
        if(obj1[arr2[i][0]]){
            obj1[arr2[i][0]] += arr2[i][1];
        } else{
            obj1[arr2[i][0]] = arr2[i][1];
        }
    }
    // Convert object to array
    let newArr = Object.entries(obj1);
    for(let i=0;i<newArr.length;i++){
        newArr[i][0] = parseInt(newArr[i][0])
    }
    return newArr;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])); //should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]].
console.log(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));