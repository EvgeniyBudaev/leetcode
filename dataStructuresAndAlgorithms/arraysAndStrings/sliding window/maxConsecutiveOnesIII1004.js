/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * Учитывая двоичный массив nums и целое число k, верните максимальное количество последовательных 1's в массиве,
 * если вы можете перевернуть не более k 0 's.
 **/
var longestOnes = function(nums, k) {
    let zeros = 0;
    let result = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            while (zeros >= k) {
                if (nums[left] === 0) {
                    zeros -= 1;
                }
                left++;
            }
            zeros += 1;
        }
        result = Math.max(result, right- left + 1);
    }

    return result;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // 6 // [1,1,1,0,0,1,1,1,1,1,1]
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // 10 // [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]