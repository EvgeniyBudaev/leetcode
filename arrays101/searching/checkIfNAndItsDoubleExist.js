/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let newSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (newSet.has(arr[i] / 2) || newSet.has(arr[i] * 2)) {
      return true;
    } else {
      newSet.add(arr[i]);
    }
  }

  return false;
};

console.log(checkIfExist([10, 2, 5, 3])); // true
console.log(checkIfExist([3, 1, 7, 11])); // false
