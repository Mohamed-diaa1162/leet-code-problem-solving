"use strict";
//#solved
// problem link https://leetcode.com/problems/valid-anagram/
function isAnagram(s, t) {
    let value = false;
    let sArray = s.split("");
    let tArray = t.split("");
    let sLength = sArray.length;
    let tLength = tArray.length;
    if (tLength > sLength || tLength < sLength)
        return value;
    for (let element of sArray) {
        sArray = sArray.filter((letter) => letter !== element);
        tArray = tArray.filter((letter) => letter !== element);
        sLength = sArray.length;
        tLength = tArray.length;
        if (tLength > sLength || tLength < sLength)
            return value;
        if (sLength == 0 && tLength == 0)
            value = true;
        if (sLength == 0 || tLength == 0)
            break;
    }
    return value;
}
console.log(isAnagram("aacc", "ccac"));
