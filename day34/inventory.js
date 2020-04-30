// Inventory challenge
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let obj1 = {};
    let key = [];
    let value = [];
    let obj2 = {};
    for(let i =0;i<arr1.length;i++){
        key[i] = arr1[i][1];
        value[i] = arr1[i][0];
        obj1[key[i]] = value[i];
    }

    for(let i=0;i<arr2.length;i++){
        if(obj1[arr2[i][1]]){
            console.log(arr2[i][1])
            obj1[arr2[i][1]] += arr2[i][0];
        }
    }

    return obj1;
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