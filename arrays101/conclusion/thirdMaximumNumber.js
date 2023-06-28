/**
 * @param {number[]} nums
 * @return {number}
 */

/** Учитывая целочисленный массив nums, вернуть третье максимальное число в этом массиве.
 *  Если третьего максимума не существует, вернуть максимальное число **/
var thirdMax = function(nums) {
    const uniqueNums = [...new Set(nums)];
    uniqueNums.sort((a, b) => b - a);

    return uniqueNums[2] !== undefined ? uniqueNums[2] : uniqueNums[0];
};

console.log(thirdMax([3,2,1])); // 1
console.log(thirdMax([1,2])); // 2
console.log(thirdMax([2,2,3,1])); // 1