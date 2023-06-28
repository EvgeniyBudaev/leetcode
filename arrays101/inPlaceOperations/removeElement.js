/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/** Учитывая целочисленный массив nums и целое число val, удалите все вхождения val in nums in-place.
 *  Порядок элементов может быть изменен. Затем вернуть количество элементов, в nums которых не равны val **/
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length;
};

console.log(removeElement([3,2,2,3], 3)); // 2, nums = [2,2,_,_]
console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]
