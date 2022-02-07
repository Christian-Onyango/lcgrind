/*Given the root of a binary tree, return the 
preorder traversal of its nodes' values 
Input: root = [1,numm,2,3] 
Output: [[1,2,3]] */

//using stack
const preOrder = (root) => {
  if (!root) return []
  const stack = [root]
  const result = []
  while (stack.length) {
    let node = stack.pop()
    result.push(node.val)

    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
}

//using recursion
const preOrder2 = (root) => {
  if (!root) return []
  const result = []
  const preOrder = (node) => {
    if (!node) return null
    result.push(node.val)
    if (node.left) preOrder(node.left)
    if (node.right) preOrder(node.right)
  }
  preOrder(root)
  return result
}
