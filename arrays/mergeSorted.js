/* Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1
as one sorted array. The number of elements initialized in nums1 and nums2
are m + n respectively. You may assume that nums1 has a size equal to m + n
such that it has enough space to hold additional elements from nums2 

Input: nums1 = [1,2,3,0,0,0], m = 3,
nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
*/
const merge = (nums1, m, nums2, n) => {
  let first = m - 1
  let second = n - 1
  let i = m + n - 1
  while (second >= 0) {
    let firstVal = nums1[first]
    let secondVal = nums2[second]

    if (firstVal > secondVal) {
      nums1[i] = firstVal
      i--
      first--
    } else {
      nums1[i] = second
      i--
      second--
    }
  }
  return nums1
}

let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
console.log(merge(nums1, m, nums2, n))
