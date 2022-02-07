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
const minDiff = (arr) => {
  arr.sort((a, b) => a - b)
  const res = []
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i]
    min = Math.min(min, diff)
    if (min === diff) {
      res.push([arr[i], arr[i + 1]])
    }
  }
  return res
}
console.log(minDiff([1, 3, 6, 10, 15]))
