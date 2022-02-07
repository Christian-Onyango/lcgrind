/* Given an array, rotate the array to the right by k steps, where k is
non negative. 
Input: nums = [1,2,3,4,5,6,7] k = 3
Output: [5,6,7,1,2,3,4] 
*/
const revNums = (arr, start, end) => {
  while (start < end) {
    ;[arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
}

const revArr = (arr, k) => {
  k = k % arr.length
  arr.reverse()
  revNums(arr, 0, k - 1)
  revNums(arr, k, arr.length - 1)
  return arr
}
console.log(revArr([1, 2, 3, 4, 5, 6, 7], 3))
