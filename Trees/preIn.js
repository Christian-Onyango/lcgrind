/* Given two integer arrays preorder and inorder
where preorder is the preorder traversal of a 
binary tree and inorder is the inorder traversal of
the same tree, construct and return the binary tree. 
*/

const buildTree = (preOrder, Inorder) => {
  if (!preOrder || !Inorder) return null
  let root = new TreeNode(preOrder[0])
  let mid = Inorder.indexOf(root.val)

  root.left = buildTree(preOrder.slice(1, mid + 1), Inorder.slice(0, mid))
  root.right = buildTree(preOrder.slice(mid + 1), Inorder.slice(mid + 1))

  return root
}
