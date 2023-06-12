function lengthOfLIS(numbers: number[]): number {
  let count: number = 0;
  let map: Map<string, number[]> = new Map<string, number>();

  for (const i in numbers) {
    const element = numbers[i];
    map.set(`${i}`, [numbers[i]]);
    second: for (const j in numbers) {
      const element2: number = numbers[j];
      if (j == 0) continue second;
      if (element2 > element && element2 > numbers[j - 1]) {
        map.set(`${i}`, map.get(`${i}`).push());
      }
    }
  }

  return count;
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
