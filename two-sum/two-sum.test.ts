import { describe, expect, test } from "bun:test";
import { twoSum } from './two-sum';

describe('Two Sum', () => {
    // Test Case 1: Basic success
    test('should return indices for positive numbers', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    // Test Case 2: Different positions
    test('should return indices for different positions', () => {
        const nums = [3, 2, 4];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    // Test Case 3: Duplicates allowed
    test('should handle duplicate numbers', () => {
        const nums = [3, 3];
        const target = 6;
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });
});