// https://leetcode.com/problems/binary-search/

export function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// [0, 1, 3, 4, 5, 6];

// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 0, 1, 2, 3, 4, 5, 6 .... ]