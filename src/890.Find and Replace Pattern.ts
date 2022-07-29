//#solved
// problem link https://leetcode.com/problems/find-and-replace-pattern
/*
 * here just compere the patterns between the words
 * and the word that match the pattern we will push it into array of string and return it
 */
function findAndReplacePattern(words: string[], pattern: string): string[] {
  const result: string[] = [];
  const checkedPattern: number = getPatterns(pattern);

  for (const word of words) {
    let checkedWordPattern: number = getPatterns(word);
    if (checkedPattern == checkedWordPattern) {
      result.push(word);
    }
  }

  return result;
}
/*
 * first thing to do is find the pattern
 * you should pass the  pattern  as string
 * you will get pattern as a number
 * that will help you to compar between the patterns
 * the  pattern will be number lik abc => 012 , aab => 001
 */
function getPatterns(pattern: string): number {
  const letterArray: string[] = pattern.split("");
  let arrayNumbers: number[] = [];
  let value: number;

  for (let index = 0; index < letterArray.length; index++) {
    const element = letterArray[index];
    if (index === 0) {
      arrayNumbers.push(1);
      continue;
    }
    let checkIfTheNumberRepeated: number = letterArray.findIndex(
      (c) => element == c
    );
    if (checkIfTheNumberRepeated !== -1) {
      arrayNumbers.push(checkIfTheNumberRepeated);
    } else {
      arrayNumbers.push(arrayNumbers[arrayNumbers.length - 1] + 1);
    }
  }

  value = +arrayNumbers.join("");
  return value;
}
console.log(findAndReplacePattern(["a", "b", "c"], "a")); //Output: ["a", "b", "c"]

console.log(
  findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb")
); //Output: ["mee","aqq"]

console.log(findAndReplacePattern(["abc", "cba", "xyx", "yxx", "yyx"], "abc")); //Output: ["abc","cba"]
console.log(
  findAndReplacePattern(["bezhk", "ohmgb", "enbki", "kcxmv", "zimsl"], "iusiq")
); //Output: []
