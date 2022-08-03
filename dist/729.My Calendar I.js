"use strict";
// #solved
// problem link https://leetcode.com/problems/my-calendar-i/submissions/
/*
 * tha target is to know the numbers between start and end already in the array
 * you must to know oop
 */
class MyCalendar {
    constructor() {
        this.map = [];
    }
    book(start, end) {
        let result = false;
        if (this.map.length > 0) {
            // if there is numbers will come true from function we want to be false
            result = !this.check(start, end);
        }
        else {
            // if there is numbers will come false from function we want to be true
            this.check(start, end);
            result = true;
        }
        return result;
    }
    // this for check are numbers between start and end already in the array
    check(start, end) {
        // this variable to check if there is a number between start and end
        let result = false;
        // if no element is found just push start and end in the array in map array
        if (this.map.length == 0) {
            this.map.push([start, end]);
        }
        else {
            for (let element of this.map) {
                // check if the end > first element and start smaller than second element
                if (end > element[0] && start < element[1]) {
                    // if it is true just stop the loop and return true
                    result = true;
                    break;
                }
            }
            //   if false just return false
            if (!result) {
                this.map.push([start, end]);
            }
        }
        return result;
    }
}
const myCalendar = new MyCalendar();
// Test This Alone
// console.log(myCalendar.book(47, 50)); // return True
// console.log(myCalendar.book(33, 41)); // return true
// console.log(myCalendar.book(39, 45)); // return false
// console.log(myCalendar.book(33, 42)); // return false,
// console.log(myCalendar.book(25, 32)); // return true,
// console.log(myCalendar.book(26, 35)); // return false,
// console.log(myCalendar.book(19, 25)); // return true
// console.log(myCalendar.book(3, 8)); // return true
// console.log(myCalendar.book(8, 13)); // return true
// console.log(myCalendar.book(18, 27)); // return false
// Test This Alone
console.log(myCalendar.book(97, 100)); // return true
console.log(myCalendar.book(33, 51)); // return true
console.log(myCalendar.book(89, 100)); // return false
console.log(myCalendar.book(83, 100)); // return false
console.log(myCalendar.book(75, 92)); // return true
console.log(myCalendar.book(76, 95)); // return false
console.log(myCalendar.book(19, 30)); // return true
console.log(myCalendar.book(53, 63)); // return true
console.log(myCalendar.book(8, 23)); // return false
console.log(myCalendar.book(18, 37)); // return false
console.log(myCalendar.book(87, 100)); // return false
console.log(myCalendar.book(83, 100)); // return false
console.log(myCalendar.book(54, 67)); // return false
console.log(myCalendar.book(35, 48)); // return false
console.log(myCalendar.book(58, 75)); // return false
console.log(myCalendar.book(70, 89)); // return false
