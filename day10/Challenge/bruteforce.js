let nums = [2, 7, 11, 15];
let target = 9;
let newfunc = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return {i, j}
            }
        }
    }
}


i = newfunc(nums);
console.log(i);