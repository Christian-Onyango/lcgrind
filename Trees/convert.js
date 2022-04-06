//convert sorted arr to bst

const sortedArrBst = (nums, left = 0, right = nums.length - 1) => {
  if (left > right) return null

  let mid = Math.floor(left + right) / 2
  let root = new TreeNode(nums[mid])
  root.left = sortedArrBst(nums, left, mid - 1)
  root.right = sortedArrBst(nums, mid + 1, right)

  return root
}
