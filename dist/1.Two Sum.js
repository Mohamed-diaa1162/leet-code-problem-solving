"use strict";
//#solved
// problem link https://leetcode.com/problems/two-sum/submissions/
/*
 * First you must know what hash map is ..
 * For get big O (n)
 */
function twoSum(nums, target) {
    const numbers = [];
    const map = new Map();
    for (let num = 0; num < nums.length; num++) {
        // here we want to know the number we need to reach to the target
        const value = target - nums[num];
        // if we reach the value we are miss to reach the target
        if (map.has(value)) {
            // here we push the index of loop and the index of the value we need
            numbers.push(map.get(value), num);
        }
        else {
            // otherwise we we push the value and the index of map for we can find it
            map.set(nums[num], num);
        }
    }
    return numbers;
}
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0,1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1,2]
console.log(twoSum([3, 3], 6)); // Output: [0,1]
