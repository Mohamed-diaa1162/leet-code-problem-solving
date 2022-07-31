// #solved
// problem link https://leetcode.com/problems/word-subsets/
/*
 * First you must know what hash map is ..
 * For get big O (n**2)
 */
function wordSubsets(words1: string[], words2: string[]): string[] {
  let answer: string[] = [];
  const map1: Map<any, any> = new Map();

  for (const word of words1) {
    const mapValue = letterCount(word);
    map1.set(word, mapValue);
  }

  const map2: Map<any, any> = new Map();
  for (const word of words2) {
    const mapValue = letterCount(word);

    for (const [l, time] of mapValue) {
      if ((map2.get(l) ?? 0) < time) map2.set(l, time);
    }
  }
  Main: for (const [word, hash1] of map1) {
    for (const [letter, time] of map2) {
      if ((hash1.get(letter) ?? 0) < time) {
        continue Main;
      }
    }
    answer.push(word);
  }
  return answer;
}

function letterCount(word: string) {
  let table = new Map();

  for (const letter of word) {
    let checkIfThereIsLetterInTable = table.get(letter);
    checkIfThereIsLetterInTable == undefined
      ? table.set(letter, 1)
      : table.set(letter, +checkIfThereIsLetterInTable + 1);
  }

  return table;
}

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
); // Output: ["facebook","google","leetcode"]

console.log(
  wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["l", "e"])
); // Output: ["apple","google","leetcode"]

console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["e", "oo"]
  )
); // Output: ["google","facebook"]

console.log(
  wordSubsets(
    ["amazon", "apple", "facebook", "google", "leetcode"],
    ["lo", "eo"]
  )
); // Output: ["google","leetcode"]

console.log(
  wordSubsets(["cccbb", "aacbc", "bbccc", "baaba", "acaba"], ["cb", "b", "cb"])
); //  Output: ["cccbb","aacbc","bbccc","acaba"]
