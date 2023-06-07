/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let rightMax = -1;

    for (let i = arr.length - 1; i >= 0; i--) {
        const newMax = Math.max(rightMax, arr[i]);
        arr[i] = rightMax;
        rightMax = newMax
    }

    return arr;
};

console.log(replaceElements([17,18,5,4,6,1])); // [18,6,6,6,1,-1]
console.log(replaceElements([400])); // [-1]