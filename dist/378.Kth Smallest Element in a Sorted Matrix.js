"use strict";
//#solved
// problem link https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
/*
 * @param {number} K is the kth smallest element in the matrix
 * like [1 , 7 ,3 ,5] k = 2 ths second smallest element is 3
 * you must to know one of sort algorithm to implement
 */
function kthSmallest(matrix, k) {
    let result = 0;
    let allArray = [];
    // put all arrays in one array to can compar between numbers
    for (const array of matrix) {
        allArray.push(...array);
    }
    allArray = insertionSort(allArray);
    result = allArray[k - 1];
    return result;
}
function insertionSort(inputArr) {
    let n = inputArr.length;
    for (let i = 1; i < n; i++) {
        let current = inputArr[i];
        let j = i - 1;
        while (j > -1 && current < inputArr[j]) {
            inputArr[j + 1] = inputArr[j];
            j--;
        }
        inputArr[j + 1] = current;
    }
    return inputArr;
}
console.log(kthSmallest([
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
], 8)); // Output: 13
console.log(kthSmallest([[-5]], 1));
console.log(kthSmallest([
    [1, 2],
    [1, 3],
], 2)); // Output: 1
console.log(kthSmallest([
    [1, 2],
    [1, 3],
], 3)); // Output: 2
