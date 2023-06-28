/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/** Учитывая массив целых чисел nums, переместите все 0 элементы в его конец,
 *  сохраняя относительный порядок ненулевых элементов **/
var moveZeroes = function(nums) {
    let numsLength = nums.length;

    for (let i = 0; i < numsLength; i++) {
        if (nums[i] === 0) {
            nums.push(0);
            nums.splice(i, 1);
            numsLength--;
            i--;
        }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0,0,1])); // [1,0,0]