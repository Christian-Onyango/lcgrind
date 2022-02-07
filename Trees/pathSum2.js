/* Given the root of a binary tree and an integer
targetSum, return all root-to-leaf paths where
each path's sum equals targetSum. A leaf is a 
node with no children
*/
const pathSum = (root, targetSum) => {
  if (!root) return null
  let result = []

  const dfs = (node, sum, slate) => {
    if (node.left === null && node.right === null) {
      if (node.val === sum) {
        slate.push(node.val)
        result.push(slate.slice())
        slate.pop()
      }
    }
    if (node.left) {
      slate.push(node.val)
      dfs(node.left, sum - node.val, slate)
      slate.pop()
    }

    if (node.right) {
      slate.push(node.val)
      dfs(node.right, sum - node.val, slate)
      slate.pop()
    }
  }
  dfs(root, targetSum, [])
}
