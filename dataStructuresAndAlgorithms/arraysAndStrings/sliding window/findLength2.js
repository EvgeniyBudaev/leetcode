/**
 * @param {string} s
 * @return {number}
 */

/**
 * Вам дана двоичная подстрока s (строка, содержащая только «0» и «1»).
 * Вы можете выбрать до одного «0» и перевернуть его на «1».
 * Какова длина самой длинной достижимой подстроки, содержащей только «1»?
 *
 * Например, при заданном s = "1101100111" ответ равен 5.
 * Если выполнить переворот по индексу 2, строка станет 1111100111.
 **/
var findLength = function(s) {
    let left = 0, curr = 0, ans = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] === "0") {
            curr++;
        }

        while (curr > 1) {
            if (s[left] === "0") {
                curr -= 1;
            }
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}

console.log(findLength("1101100111")); // 5 // 1111100111