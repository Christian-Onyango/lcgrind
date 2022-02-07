/* A peak element is an element that is strictly greater than its neighbors
Given an integer array nums, find a peak element, and return its index. If the array
contains multiple peaks, return the index to any of the peaks. 
You may imagine that nums[-1] = nums[n] = _infinity
*/
//return index
const findPeak = (arr) => {
  let peak
  for (let i = arr.length; i >= 0; i--) {
    if (i === 0) {
      peak = 0
    }
    if (arr[i] > arr[i - 1]) {
      peak = i
      break
    }
  }
  return peak
}
//return elements
const findPeak2 = (arr) => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (arr[mid] < arr[mid] + 1) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
console.log(findPeak2([1, 2, 1, 3, 5, 6, 4]))
