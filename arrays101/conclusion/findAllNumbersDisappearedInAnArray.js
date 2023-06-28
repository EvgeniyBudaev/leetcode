/**
 * @param {number[]} nums
 * @return {number[]}
 */

/** Дан массив nums целых n чисел где nums[i] находится в диапазоне [1, n],
 *  вернуть массив всех целых чисел в диапазоне [1, n] , которые не появляются в nums **/
var findDisappearedNumbers = function(nums) {
    const arrayLength = nums.length;

    // Маркируем все числа, которые появились в массиве
    for (let i = 0; i < arrayLength; i++) {
        const num = Math.abs(nums[i]);
        nums[num - 1] = -Math.abs(nums[num - 1]);
    }

    // Добавляем в массив все числа, которые не были помечены
    for (let i = 0; i < arrayLength; i++) {
        if (nums[i] > 0) {
            nums.push(i + 1);
        }
    }
    // Удаляем помеченные числа из массива
    nums.splice(0, arrayLength);
    return nums;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // [5,6]
console.log(findDisappearedNumbers([1,1])); // [2]