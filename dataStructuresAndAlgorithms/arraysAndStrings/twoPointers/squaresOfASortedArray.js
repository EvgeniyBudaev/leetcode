/**
 * @param {number[]} nums
 * @return {number[]}
 */

/** Дан целочисленный массив nums, отсортированный в неубывающем порядке,
 *  вернуть массив квадратов каждого числа, отсортированного в неубывающем порядке **/
const compareNumbers = (a, b) => {
    return a - b;
};

var sortedSquares = function(nums) {
    const numsPositive = nums.map(item => item < 0 ? item * -1 : item);
    const numsSorted = numsPositive.sort(compareNumbers);

    return numsSorted.map(item => item * item);
};