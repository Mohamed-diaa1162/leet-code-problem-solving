//#solved
// problem link https://leetcode.com/problems/summary-ranges

const BinarySearch = (nums: number[], target: number) => {
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
    } else if (nums[mid] < target) {
      start = mid + 1;
      // if middle element it greater, move the end point to mid - 1
    } else {
      end = mid - 1;
    }
  }
  // if not found, return -1
  return false;
};

function summaryRanges(numbers: number[]): string[] {
  let result: string[] = [];

  for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    let target = element + 1;
    let targetIndex = index;
    let lastElementInSequents = element;
    let exits = true;

    while (exits) {
      exits = BinarySearch(numbers, target);
      if (exits) {
        numbers.splice(index, 1);
        console.log(numbers);
        target++;
        targetIndex++;
      } else {
        lastElementInSequents = target - 1;
        if (lastElementInSequents === element) result.push(`${element}`);
        else result.push(`${element}->${lastElementInSequents}`);
      }
    }
  }

  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));

console.log(summaryRanges([0, 1, 3, 4, 5, 6]));
