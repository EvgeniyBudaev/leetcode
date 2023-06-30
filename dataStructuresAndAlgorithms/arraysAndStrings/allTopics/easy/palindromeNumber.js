/**
 * @param {number} x
 * @return {boolean}
 */

/** Учитывая целое число x, вернуть true, если x является палиндром, и false в противном случае **/
var isPalindrome = function(x) {
    let str = x.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }

      left++;
      right--;
    }

    return true;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false