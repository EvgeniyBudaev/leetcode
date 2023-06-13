/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * Учитывая массив целых чисел nums и целое число k, вернуть количество смежных подмассивов,
 * где произведение всех элементов в подмассиве строго меньше, чем k .
 **/
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) {
        return 0;
    }

    let ans = 0, left = 0, curr = 1;

    for (let right = 0; right < nums.length; right++) {
        curr *= nums[right];
        while (curr >= k) {
            curr /= nums[left];
            left++;
        }

        ans += right - left + 1;
    }

    return ans;
};