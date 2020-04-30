// Inventory challenge
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired
    let obj1 = {};
    let key = [];
    let value = [];
    for(let i =0;i<arr1.length;i++){
        key[i] = arr1[i][1];
        value[i] = arr1[i][0];
        obj1[key[i]] = value[i];
    }

    for(let i=0;i<arr2.length;i++){
        if(obj1[arr2[i][1]]){
            obj1[arr2[i][1]] += arr2[i][0];
        } else{
            obj1[arr2[i][1]] = arr2[i][0];
        }
    }
    // Convert object to array
    let newArr = Object.entries(obj1);
    let temp;
    // Implement sorting
    for(let i = 0;i<newArr.length;i++){
        newArr.sort(function(a,b){
            return a===b? 0:a>b? 1:-1;
        })
    }
    // Implement swapping
    for(let i=0;i<newArr.length;i++){
        temp = newArr[i][0];
        newArr[i][0] = newArr[i][1];
        newArr[i][1] = temp;
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
