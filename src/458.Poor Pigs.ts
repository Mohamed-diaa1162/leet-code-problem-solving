function poorPigs(
  buckets: number,
  minutesToDie: number,
  minutesToTest: number
): number {
  if (buckets-- == 1) {
    return 0;
  }
  let base: number = minutesToTest / minutesToDie + 1;
  let res: number = 0;
  while (buckets > 1) {
    buckets = buckets / base;
    res += 1;
  }
  return res;
}
