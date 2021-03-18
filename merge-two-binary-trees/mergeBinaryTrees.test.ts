import { mergeTrees, TreeNode } from './mergeTwoBinaryTrees'

describe('#mergeTrees', () => {
  describe('when root1 is present and root2 is null', () => {
    const root1 = new TreeNode();
    const root2 = null;

    it('returns root1', () => {
      expect(mergeTrees(root1, root2)).toBe(root1);
    })
  })

  describe('when root1 is null and root2 is present', () => {
    const root1 = null;
    const root2 = new TreeNode();

    it('returns root2', () => {
      expect(mergeTrees(root1, root2)).toBe(root2);
    })
  })

  describe('leetcode test case 1', () => {
    const root1 = null;
    const root2 = new TreeNode();

    it('returns root2', () => {
      expect(mergeTrees(root1, root2)).toBe(root2);
    })
  })
})
