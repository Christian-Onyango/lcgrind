/* Given an integer array sorted in asc order, write a function to
search target in nums. If target exists, then return its index, otherwise
return -1. However, the array size is unknown to you. You may only access
the array using an ArrayReader interface, where ArrayReader.get(k) returns
the element of the array at index k (0-indexed). 

You may assume all integers in the array are less than 10000, and if you access
the array out of bounds, ArrayReader.get will return 2147483647

Input: array = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/
const search = (reader, target) => {
  let left = 0
  let right = 1
  while (reader.get(right) < target) {
    left = right
    right = right * 2
  }
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2)
    if (reader.get(mid) === target) return mid
    if (reader.get(left) <= target && target < reader.get(mid)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12]))
