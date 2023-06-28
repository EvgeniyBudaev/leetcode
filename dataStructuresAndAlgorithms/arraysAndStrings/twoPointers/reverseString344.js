/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

/** Напишите функцию, которая переворачивает строку. Входная строка задается как массив символов s.

Вы должны сделать это, изменив входной массив на месте с O(1) дополнительной памятью **/
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }

    return s;
};

console.log(reverseString(["h","e","l","l","o"])); // ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"])); // ["h","a","n","n","a","H"]