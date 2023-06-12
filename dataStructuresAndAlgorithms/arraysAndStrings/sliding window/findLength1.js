/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findLength = function(nums, k) {
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (curr > k) {
            curr -= nums[left];
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}

console.log(findLength([3, 1, 2, 7, 4, 2, 1, 1, 5]), 8); // 4 // [4, 2, 1, 1]