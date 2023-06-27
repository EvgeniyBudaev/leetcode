/**
 * @param {number[]} nums
 * @return {number}
 */

/** Учитывая двоичный массив nums, вернуть максимальное количество последовательных 1's в массиве **/
const findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let currentCountOfOnes = 0;

    nums.forEach(num => {
        if (num === 1) {
            currentCountOfOnes += 1;
            max = Math.max(max, currentCountOfOnes);
        } else {
            currentCountOfOnes = 0;
        }
    });

    return max;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1])); // 3
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); // 2