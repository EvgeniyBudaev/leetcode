/**
 * @param {number[]} nums
 * @return {number[]}
 */

/** Дан целочисленный массив nums, отсортированный в неубывающем порядке,
 *  вернуть массив квадратов каждого числа, отсортированного в неубывающем порядке **/
const compareNumbers = (a, b) => {
    return a - b;
};

const sortedSquares = function(nums) {
    const numsPositive = nums.map(item => item < 0 ? item * -1 : item);
    const numsSorted = numsPositive.sort(compareNumbers);

    return numsSorted.map(item => item * item);
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]