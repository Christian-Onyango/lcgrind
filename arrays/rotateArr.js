/* Given an array, rotate the array to the right by k steps, where k is
non negative. 
Input: nums = [1,2,3,4,5,6,7] k = 3
Output: [5,6,7,1,2,3,4] 
*/
const revNums = (nums, start, end) => {
  while (start < end) {
    ;[nums[start], nums[end]] = [nums[end], nums[start]]
    start++
    end--
  }
}
const revArr = (nums, k) => {
  //we mod k so if k than laarger than len of nums
  k = k % nums.length
  nums.reverse()
  revNums(nums, 0, k - 1)
  revNums(nums, k, nums.length - 1)
  return nums
}
console.log(revArr([1, 2, 3, 4, 5, 6, 7], 3))
