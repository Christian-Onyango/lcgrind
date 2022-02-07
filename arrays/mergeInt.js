/* Given an array of intervals where intervals[i] = [start, end] 
merge all overlapping intervals, and return an array of the non-overlapping
intervals that cover all the intervals in the input. 

Input: intervals = [[1,3], [2, 6], [8, 10], [15, 18]]
Output = [[[1,6], 8, 10], [15, 18]]
intervals = [[1, 4], [4, 5]]
output = [[1, 5]]
*/
const interval = (nums) => {
  nums.sort((a, b) => a[0] - b[0])
  const result = [nums[0]]
  for (let num of nums) {
    let e1 = result[result.length - 1][1] //3
    let s2 = num[0] //[1,3]
    let e2 = num[1] //[2,6]

    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2)
    } else {
      result.push(num)
    }
  }
  return result
}
const arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log(interval(arr))
