/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) return false;
    if (arr[1] < arr[0]) return false;

    let maxFound = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) return false;
        if (maxFound && arr[i] < arr[i + 1]) return false;
        if (arr[i] > arr[i + 1]) {
            maxFound = true;
        }
    }

    return maxFound;
};

console.log(validMountainArray([2,1])); // false
console.log(validMountainArray([3,5,5])); // false
console.log(validMountainArray([0,3,2,1])); // true