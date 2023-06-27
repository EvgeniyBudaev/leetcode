/**
 * @param {number[]} nums
 * @return {number}
 */

/** Учитывая массив nums целых чисел, вернуть, сколько из них содержат четное количество цифр **/
const findNumbers = function(nums) {
    let counter = 0;

    nums.forEach(num => {
        if (num.toString().length % 2 === 0) counter++;
    })

    return counter;
};

console.log(findNumbers([12,345,2,6,7896])) // 2
console.log(findNumbers([555,901,482,1771])) // 1