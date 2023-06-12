// #solved
// problem link https://leetcode.com/problems/contains-duplicate
/*
 * First you must know what hash map is ..
 * For get big O (n)
 */
function containsDuplicate(numbers: number[]): boolean {
  let check: boolean = false;
  let map: Map<number, number> = new Map<number, number>();

  for (const element of numbers) {
    if (map.has(element)) {
      check = true;
      break;
    }
    map.set(element, 1);
  }
  return check;
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
