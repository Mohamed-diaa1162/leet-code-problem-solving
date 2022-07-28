"use strict";
//#solved
// problem link https://leetcode.com/problems/search-a-2d-matrix-ii/submissions/ ;
function searchMatrix(matrix, target) {
    let value = false;
    for (let index = 0; index < matrix.length; index++) {
        const element = matrix[index];
        value = BinarySearch(element, target);
        if (value === true) {
            return true;
        }
        if (index === matrix.length - 1) {
            return value;
        }
        else {
            continue;
        }
    }
    return value;
}
const BinarySearch = (nums, target) => {
    // declare start and end
    let start = 0;
    let end = nums.length - 1;
    // base condition
    while (start <= end) {
        // find the mid point
        let mid = Math.floor((start + end) / 2);
        // if middle element is the target, return middle index
        if (nums[mid] === target) {
            return true;
            // if middle element is smaller, move the start point to mid + 1
        }
        else if (nums[mid] < target) {
            start = mid + 1;
            // if middle element it greater, move the end point to mid - 1
        }
        else {
            end = mid - 1;
        }
    }
    // if not found, return -1
    return false;
};
// console.log(BinarySearch([1, 4, 7, 11, 15], 5));
console.log(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
], 20));
