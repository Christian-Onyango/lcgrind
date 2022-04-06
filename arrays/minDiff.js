/* Given an array of distinct integers arr, find all pairs of elements
with the minimum absolute difference of any two elements. Return a list
of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr

Input: arr = [4,2,1,3] 
Output:[[1,2], [2,3], [3,4]] 
Explanation: The minimum absolute difference is 1, list all pairs
with difference equal to 1 in asc order

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
 */
const minDiff = (nums) => {
  nums.sort((a, b) => a - b)
  let min = Infinity
  let result = []
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i]
    min = Math.min(diff, min)
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i]
    if (min === diff) {
      result.push([nums[i], nums[i + 1]])
    }
  }
  return result
}
console.log(minDiff([4, 2, 1, 3]))
