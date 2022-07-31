"use strict";
//#solved
// problem link https://leetcode.com/problems/range-sum-query-mutable/submissions/
/*
 * First you must know what Segment Tree is ..
 * For get big O (log(n))
 */
class SegmentTree {
    constructor(array) {
        this.array = array;
        this.arrayLength = array.length;
        this.tree = Array(this.arrayLength << 1);
        this.build(1, 0, this.arrayLength);
    }
    build(value, left, right) {
        if (left === right - 1) {
            this.tree[value] = this.array[left];
            return;
        }
        let m = (left + right) >> 1;
        this.build(2 * value, left, m);
        this.build(2 * value + 1, m, right);
        this.tree[value] = this.tree[2 * value] + this.tree[2 * value + 1];
    }
    update(value, left, right, index, val) {
        if (index < left || index >= right) {
            return;
        }
        if (left == right - 1) {
            this.tree[value] = val;
            return;
        }
        let m = (left + right) >> 1;
        this.update(2 * value, left, m, index, val);
        this.update(2 * value + 1, m, right, index, val);
        this.tree[value] = this.tree[2 * value] + this.tree[2 * value + 1];
    }
    sumRange(value, left, right, bg, en) {
        if (right <= bg || left >= en) {
            return 0;
        }
        if (left >= bg && right <= en) {
            return this.tree[value];
        }
        let m = (left + right) >> 1;
        return (this.sumRange(2 * value, left, m, bg, en) +
            this.sumRange(2 * value + 1, m, right, bg, en));
    }
}
class NumArray {
    constructor(numbers) {
        this.tree = new SegmentTree(numbers);
    }
    update(index, val) {
        this.tree.update(1, 0, this.tree.arrayLength, index, val);
    }
    sumRange(left, right) {
        return this.tree.sumRange(1, 0, this.tree.arrayLength, left, right + 1);
    }
}
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
const numArray = new NumArray([1, 3, 5]);
console.log(numArray.sumRange(0, 2)); // return 1 + 3 + 5 = 9
numArray.update(1, 2); // nums = [1, 2, 5]
console.log(numArray.sumRange(0, 2)); // return 1 + 2 + 5 = 8
console.log(0 >> 1);
