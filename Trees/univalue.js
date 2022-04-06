/* Given the root of a binary tree, return the number
of uni-value subtrees. A uni-value subtree means all nodes
of the subtree have the same value
*/

const uniVal = (root) => {
  if (root === null) return 0

  let count = 0
  const dfs = (node) => {
    if (root.left === null && root.right === null) {
      count++
      return true
    }
    let isUnival = true
    if (node.left) {
      let left = dfs(node.left)
      isUnival = left && isUnival && node.val === node.left.val
    }

    if (node.right) {
      let right = dfs(node.right)
      isUnival = right && isUnival && node.val === node.right.val
    }
    if (isUnival) count++
    return isUnival
  }
  dfs(root)
  return count
}
