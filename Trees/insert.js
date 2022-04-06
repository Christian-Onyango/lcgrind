/* 
You are given the root node of a binary search tree (BST) and a value to insert into the tree. 
Return the root node of the BST after the insertion. 
It is guaranteed that the new value does not exist in the original BST.
Notice that there may exist multiple valid ways for the insertion, as long as the tree 
remains a BST after insertion. You can return any of them.

Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]
Explanation: Another accepted tree is:
*/
const insert = (root, val) => {
  const newNode = new TreeNode(val)
  if (!root) return newNode
  let curr = root
  let prev = null

  while (curr) {
    if (val > curr.val) {
      prev = curr
      curr = curr.right
    } else {
      prev = curr
      curr = curr.left
    }
  }
  if (val < prev.val) {
    prev.left = newNode
  } else {
    prev.right = newNode
  }
  return root
}
