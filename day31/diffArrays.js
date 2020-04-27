function diffArray(arr1, arr2) {
    var endArr = [];
    var obj1 = {}; 
    var obj2 = {}; 

    for(let i = 0;i<arr1.length;i++){
        obj1[arr1[i]] = 1;
    }

    for(let i = 0;i<arr2.length;i++){
        obj2[arr2[i]] = 1;
    }

    for(let i=0;i<arr2.length;i++){
        if(!obj1[arr2[i]]){
            endArr.push(arr2[i]);
        }
    }

    for(let i=0;i<arr1.length;i++){
        if(!obj2[arr1[i]]){
            endArr.push(arr1[i]);
        }
    }
    return endArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));