/**
 * @param {number[]} nums
 * @return {number[]}
 */
const compareNumbers = (a, b) => {
    return a - b;
};

var sortedSquares = function(nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    let i = nums.length - 1;

    while (left <= right) {
        const leftSquare = nums[left] ** 2;
        const rightSquare = nums[right] ** 2;

        if (leftSquare > rightSquare) {
            result[i] = leftSquare;
            left++;
        } else {
            result[i] = rightSquare;
            right--;
        }

        i--;
    }

    return result;
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])); // [4,9,9,49,121]