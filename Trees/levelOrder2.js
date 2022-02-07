/* Given the root of a binary tree, return the bottom-up
level order traversal of its nodes' values(i.e., fronm left to
    right, level by level from leaf to root)

Input: root = [3,9,20,null, null, 15, 7] 
Output: [[15,7], [9, 20], [3]]
*/
const levelOrder = (root) => {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length) {
    let len = queue.length
    res.push(queue.map((node) => node.val))
    while (len--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res.reverse()
}
