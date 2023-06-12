/**
 * @param {string} s
 * @return {number}
 */
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