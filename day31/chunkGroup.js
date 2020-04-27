function chunkArrayInGroups(arr, size) {
    let bigArr = [];
    let group = Math.ceil(arr.length / size);
    for (let i = 0; i < group; i++) {
        bigArr[i] = arr.splice(0, size);
    }
    return bigArr;
}
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
