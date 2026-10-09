/**
 * @param nums: number[] The array of integers.
 * @param target: number The target sum.
 * @return: number[] The indices of the two numbers that sum to target.
 */
export function twoSum(nums: number[], target: number): number[] {
  let idxs = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const complement = target - n;

    if (idxs.has(complement)) {
      return [i, idxs.get(complement)!].sort()
    }

    idxs.set(n, i);
  }

  return [];
}
