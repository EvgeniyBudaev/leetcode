/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const list = s.split('');

    for (let start = 0; start < list.length; start += 2 * k) {
        let i = start;
        let j = Math.min(start + k - 1, list.length - 1);

        while (i < j) {
            let tmp = list[i];
            list[i++] = list[j];
            list[j--] = tmp;
        }
    }

    return list.join('');
}

console.log(reverseStr("abcdefg", 2)); // "bacdfeg"
console.log(reverseStr("abcd", 2)); // "bacd"