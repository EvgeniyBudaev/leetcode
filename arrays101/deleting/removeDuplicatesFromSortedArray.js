/**
 * @param {number[]} nums
 * @return {number}
 */

/** Учитывая целочисленный массив, nums отсортированный в неубывающем порядке, удалите дубликаты на месте,
 *  чтобы каждый уникальный элемент появлялся только один раз.
 *  Относительный порядок элементов должен быть сохранен.
 *  Затем верните количество уникальных элементов в nums **/
const removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // 2 // [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5 // [0,1,2,3,4]
