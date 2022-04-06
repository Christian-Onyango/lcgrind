/* Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k and j != k, and nums[i] + nums[j] + nums[k] == 0. 
Notice the solution set mus contain duplicate triplets

Input: nums = [-1, 0, 1, 2, -1, -4]
Output: [[-1,-1,2], [-1, 0, 1]] */

const twoSum = (j, target, nums) => {
  let k = nums.length - 1
  let result = []
  while (j < k) {
    let leftVal = nums[j]
    let rightVal = nums[k]
    if (leftVal + rightVal > target) k--
    if (leftVal + rightVal < target) j++
    if (leftVal + rightVal === target) {
      result.push([target * -1, leftVal, rightVal])
      while (j < k && nums[j] === nums[j + 1]) j++
      while (j < k && nums[k] === nums[k - 1]) k--
      j++
      k--
    }
  }
  return result
}

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue
    let target = nums[i] * -1
    let subRes = twoSum(i + 1, target, nums)
    result.push(...subRes)
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
