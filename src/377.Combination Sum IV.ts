function combinationSum4(numbers: number[], target: number): number {
  let res: any = {};
  return combination(numbers, target, res);
}

function combination(numbers: number[], target: number, res: any) {
  if (target < 0) return 0;
  if (target === 0) return 1;
  if (target in res) return res[target];
  let ans = 0;
  for (let num of numbers) {
    ans += combination(numbers, target - num, res);
  }
  res[target] = ans;
  console.log(res);
  return ans;
}

console.log(combinationSum4([1, 2, 3], 4));
