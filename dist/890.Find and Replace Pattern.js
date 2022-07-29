"use strict";
//#solved
// problem link https://leetcode.com/problems/find-and-replace-pattern
function findAndReplacePattern(words, pattern) {
    const result = [];
    const checkedPattern = getPatterns(pattern);
    for (const word of words) {
        let checkedWordPattern = getPatterns(word);
        if (checkedPattern == checkedWordPattern) {
            result.push(word);
        }
    }
    return result;
}
/*
 * first thing to do is find the pattern
 * you should pass the  pattern  as string
 * you will get pattern as a number
 * that will help you to compar between the patterns
 * the  pattern will be number lik abc => 012 , aab => 001
 */
function getPatterns(pattern) {
    const letterArray = pattern.split("");
    let arrayNumbers = [];
    let value;
    for (let index = 0; index < letterArray.length; index++) {
        const element = letterArray[index];
        if (index === 0) {
            arrayNumbers.push(1);
            continue;
        }
        let checkIfTheNumberRepeated = letterArray.findIndex((c) => element == c);
        if (checkIfTheNumberRepeated !== -1) {
            arrayNumbers.push(checkIfTheNumberRepeated);
        }
        else {
            arrayNumbers.push(arrayNumbers[arrayNumbers.length - 1] + 1);
        }
    }
    value = +arrayNumbers.join("");
    return value;
}
console.log(findAndReplacePattern(["a", "b", "c"], "a")); //Output: ["a", "b", "c"]
console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")); //Output: ["mee","aqq"]
console.log(findAndReplacePattern(["abc", "cba", "xyx", "yxx", "yyx"], "abc")); //Output: ["abc","cba"]
console.log(findAndReplacePattern(["bezhk", "ohmgb", "enbki", "kcxmv", "zimsl"], "iusiq")); //Output: []
