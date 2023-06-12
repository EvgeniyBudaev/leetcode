/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Дан массив целых чисел nums и целое число k, найдите сумму подмассива с наибольшей суммой, длина которой равна k.
var findBestSubarray = function (nums, k) {
  let curr = 0; // некоторые данные для отслеживания окна

  // построить первое окно
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }

  let ans = curr; // переменная ответа , вероятно, равно curr здесь в зависимости от проблемы

  for (let i = k; i < nums.length; i++) {
    curr += nums[i] - nums[i - k];
    ans = Math.max(ans, curr);
  }

  return ans;
};

console.log(findBestSubarray([0, 1, 2], 2)); // 3
