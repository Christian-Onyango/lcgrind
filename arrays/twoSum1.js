/*
Given an array of integers nums and an integer target, return 
indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Example: 1 Input: nums = [2,7,11,15], target = 9
*/

const twoSum = (nums, target) => {
  let objV = {}
  for (let i = 0; i < nums.length; i++) {
    let elem = nums[i]
    objV[elem] = i
  }
  for (let i = 0; i < nums.length; i++) {
    let potential = target - nums[i]
    if (objV[potential] && objV[potential] !== i) {
      return [i, objV[potential]]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9))
