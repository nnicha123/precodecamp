let arr = [0,1,0,1,0,1,99];
let count = 0;


var singleNumber = function (nums) {
    for (var i = 0; i < nums.length; i++) {
        count = 0
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
            } else {
                count = count + 1;
            }
            if (count > nums.length - 3) {
                return nums[i];
            }
        }
    }
}
let single = singleNumber(arr);
console.log(single);
