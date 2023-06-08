/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums ) {
    // алгоритм скользящего окна
    let maxLength = 0;
    let windowStart = 0;
    const maxFlipOperations = 1; // максимальное количество операций переворота
    let maxConsecutiveOnes = 0; // макс. кол-во последовательных единиц

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] == 1) {
            ++maxConsecutiveOnes;
        }

        if (windowEnd - windowStart + 1 - maxConsecutiveOnes > maxFlipOperations) {
            if (nums[windowStart] == 1) {
                --maxConsecutiveOnes;
            }

            ++windowStart;
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

console.log(findMaxConsecutiveOnes([1,0,1,1,0])); // 4