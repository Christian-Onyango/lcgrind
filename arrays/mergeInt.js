/* Given an array of intervals where intervals[i] = [start, end] 
merge all overlapping intervals, and return an array of the non-overlapping
intervals that cover all the intervals in the input. 

Input: intervals = [[1,3], [2, 6], [8, 10], [15, 18]]
Output = [[[1,6], [8, 10], [15, 18]]
intervals = [[1, 4], [4, 5]]
output = [[1, 5]]
*/

const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]) //T: n log n
  const result = [intervals[0]] // 0(n) for space
  for (let interval of intervals) {
    // 0(n)
    let e1 = result[result.length - 1][1]
    let s2 = interval[0]
    let e2 = interval[1]

    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2)
    } else {
      result.push(interval)
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
console.log(merge(arr))
