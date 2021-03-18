export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const isNull = (value: any) => {
  return value === null;
}

export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if(!isNull(root1) && isNull(root2)) { return root1 };
  if(isNull(root1) && !isNull(root2)) { return root2 };

  return new TreeNode(root1!.val + root2!.val,
      mergeTrees(root1!.left, root2!.left),
      mergeTrees(root1!.right, root2!.right))
};
