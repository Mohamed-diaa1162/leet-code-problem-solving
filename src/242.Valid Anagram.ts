//#solved
// problem link https://leetcode.com/problems/valid-anagram/
function isAnagram(s: string, t: string): boolean {
  let value: boolean = false;
  let sArray: string[] = s.split("");
  let tArray: string[] = t.split("");
  let sLength: number = sArray.length;
  let tLength: number = tArray.length;

  if (tLength > sLength || tLength < sLength) return value;

  for (let element of sArray) {
    sArray = sArray.filter((letter) => letter !== element);
    tArray = tArray.filter((letter) => letter !== element);
    sLength = sArray.length;
    tLength = tArray.length;
    if (tLength > sLength || tLength < sLength) return value;
    if (sLength == 0 && tLength == 0) value = true;
    if (sLength == 0 || tLength == 0) break;
  }
  return value;
}

console.log(isAnagram("aacc", "ccac"));
