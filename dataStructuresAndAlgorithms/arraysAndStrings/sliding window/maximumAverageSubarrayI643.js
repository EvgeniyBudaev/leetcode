/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * Вам дан целочисленный массив, nums состоящий из n элементов, и целое число k.
 *
 * Найдите непрерывный подмассив, длина которого равна k максимальному среднему значению, и верните это значение.
 **/
var findMaxAverage = function (nums, k) {
    let windowStart = 0, windowSum = 0, result = -Infinity
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd]
        
        if (windowEnd >= k - 1) {
            const windowSize = (windowEnd - windowStart) + 1
            result = Math.max(result, windowSum / windowSize)
            windowSum -= nums[windowStart]
            windowStart++
        }
    }
    
    return result
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5