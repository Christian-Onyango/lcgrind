/* A peak element is an element that is strictly greater than its neighbors
Given an integer array nums, find a peak element, and return its index. If the array
contains multiple peaks, return the index to any of the peaks. 
You may imagine that nums[-1] = nums[n] = _infinity
*/
//return index

const findPeak = (nums) => {
  if (nums.length === 1) return 0
  if (nums[0] > nums[1]) return 0
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1

  for (let i = 0; i < nums.length - 2; i++) {
    let left = nums[i]
    let mid = nums[i + 1]
    let right = nums[i + 2]
    if (mid > left && mid > right) return i + 1
  }
}
//console.log(findPeak([1, 2, 1, 3, 5, 6, 4]))

//using binary search
const findPeak2 = (nums) => {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid] + 1) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
console.log(findPeak2([1, 2, 1, 3, 5, 6, 4]))
