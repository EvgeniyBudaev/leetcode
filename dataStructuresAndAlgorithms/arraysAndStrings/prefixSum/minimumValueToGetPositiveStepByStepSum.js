/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Учитывая массив целых чисел, вы начинаете с начального положительного значения startValue.
 * На каждой итерации вы пошагово вычисляете сумму startValue плюс элементы в числах (слева направо).
 * Возвращает минимальное положительное значение startValue, чтобы пошаговая сумма никогда не была меньше 1.
 **/
var minStartValue = function(nums) {
    let min = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min,sum);
    }

    return 1 - min;
};

console.log(minStartValue([-3,2,-3,4,2])); // 5
console.log(minStartValue([1,2])); // 1
console.log(minStartValue([1,-2,-3])); // 5