/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let arrayLength = nums.length;

    for (let i = 0; i < arrayLength; i++) {
        if (nums[i] % 2 !== 0) {
            nums.push(nums[i]);
            nums.splice(i, 1);
            arrayLength--;
            i--;
        }
    }

    return nums;
};

console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1]