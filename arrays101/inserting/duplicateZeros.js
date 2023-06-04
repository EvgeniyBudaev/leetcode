/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
const duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
      arr.pop();
    }
  }

  return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])); // [1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1, 2, 3])); // [1,2,3]
