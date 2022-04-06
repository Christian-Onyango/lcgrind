/* Given the root of a binary tree, return the zigzag
level order traversal of its nodes values. (i.e; from left
    to right, then right to left dor the next level and
    alternate between). 
Input: root = [3,9,20,null, null, 15, 7] 
Output: [[3], [20, 9], [15, 7]]
*/
const zigzag = (root) => {
  if (!root) return []
  const queue = [root]
  let res = []
  let count = 0

  while (queue.length) {
    let len = queue.length
    if (count % 2 === 0) res.push(queue.map((node) => node.val))
    else res.push(queue.map((node) => node.val).reverse())
    count++
    while (len--) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
}
