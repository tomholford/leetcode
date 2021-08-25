type NodeValue = number | null;

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const treeToArray = (root: TreeNode | null): NodeValue[] => {
  if(!root) { return [] };

  const memo: NodeValue[] = [];
  traverse(root, (n: TreeNode) => memo.push(n.val))
  return memo;
}

const traverse = (node: TreeNode, cb: (n: TreeNode) => void | number) => {
  var current = [node];
  while (current.length > 0) {
    var next = [];
    for (var node of current) {
      cb(node);
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    current = next;
  }
}

const arrayToTree = (nums: number[]): TreeNode | null => {
  if (nums == null || !nums.length) {
    return null;
  }

  let mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);
  node.left = arrayToTree(nums.slice(0, mid));
  node.right = arrayToTree(nums.slice(mid + 1, nums.length))
  return node;
}

export {
  arrayToTree,
  traverse,
  treeToArray
};
