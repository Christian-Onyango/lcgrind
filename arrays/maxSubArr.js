/* Given an array consisting of n integers, find the contiguous 
subarray of given length k that has the maximum average value. And you need to output the
maximum average value. 

Input: [1,12,-5, -6, 50, 3] k = 4
Output: 12.75
*/
const maxSubArr = (nums, k) => {
  let max = -Infinity
  let soFar = 0
  let start = 0
  for (let i = 0; i < nums.length; i++) {
    soFar += nums[i]
    if (i - start === k - 1) {
      let avg = soFar / k
      max = Math.max(max, avg)
      soFar -= nums[start++]
    }
  }
  return max
}
console.log(maxSubArr([1, 12, -5, -6, 50, 3], 4))
