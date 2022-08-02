//#solved
// problem link https://leetcode.com/problems/unique-paths/

function uniquePaths(m: number, n: number): number {
  const dp = new Array(m).fill(1).map((row) => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
console.log(uniquePaths(3, 7));
console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 2));
console.log(uniquePaths(2, 3));
