/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for (const char of ransomNote) {
        if (!magazine.includes(char)) {
            return false;
        }

        magazine = magazine.replace(char, '');
    }

    return true;
};

console.log(canConstruct("a", "b")); // false
console.log(canConstruct("aa", "bb")); // false
console.log(canConstruct("aa", "aab")); // true