/**
 * Finds the longest common prefix (LCP) of all strings in an array.
 * Problem Link: https://leetcode.com/problems/longest-common-prefix/description/
 * Status: Solved ✅ 
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The longest common prefix, or an empty string if none exists.
 *
 * @timeComplexity O(n * m), where n is the number of words and m is the length of the shortest word.
 *                  In the worst case, the nested loops iterate through all characters of the prefix
 *                  for each word.
 */
function longestCommonPrefix(words: string[]): string {
    let commenPrefix: string = '';
    let firstWord = words[0].split('');
    const MAP = new Map();

    for (let i = firstWord.length; i > 0; i--) {
        let test = firstWord.slice(0, i).join('');
        MAP.set(test, test);
    }

    let totalLength = 1000;

    for (const word of words) {
        let isSuccesOnce = false;

        sub: for (let [key, value] of MAP.entries()) {
            if (word.startsWith(value)) {
                isSuccesOnce = true;
                let valueLength = value.length;

                if (totalLength > valueLength) {
                    totalLength = valueLength;
                    commenPrefix = value;
                }
                break sub;
            }
        }

        if (!isSuccesOnce) return '';
    }

    return commenPrefix;
};

console.log(longestCommonPrefix(["dog","racecar","car"])); // "" 
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
