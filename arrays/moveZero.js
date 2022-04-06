/* Given an integer array nums, move all 0s to the end of it while
maintaining the relative order of the non-zero elements. You must
do this in-place without making a copy of the array. 
Input: nums= [0,1,0,3,12] 
Output: [1,3,12,0,0] 
Input: [0] 
Output: [0] 
*/
const moveZeros = (nums) => {
  let lastNonZeroIdx = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIdx] = nums[i]
      lastNonZeroIdx++
    }
  }
  for (let i = lastNonZeroIdx; i < nums.length; i++) {
    nums[i] = 0
  }
  return nums
}
console.log(moveZeros([0, 1, 0, 3, 12]))
