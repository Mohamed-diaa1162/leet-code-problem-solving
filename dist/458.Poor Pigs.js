"use strict";
//#solved
// problem link https://leetcode.com/problems/poor-pigs/
function poorPigs(buckets, minutesToDie, minutesToTest) {
    if (buckets-- == 1) {
        return 0;
    }
    let base = minutesToTest / minutesToDie + 1;
    let res = 0;
    while (buckets > 1) {
        buckets = buckets / base;
        res += 1;
    }
    return res;
}
