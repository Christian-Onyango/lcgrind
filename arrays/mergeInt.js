/* Given an array of intervals where intervals[i] = [start, end] 
merge all overlapping intervals, and return an array of the non-overlapping
intervals that cover all the intervals in the input. 

Input: intervals = [[1,3], [2, 6], [8, 10], [15, 18]]
Output = [[[1,6], 8, 10], [15, 18]]
intervals = [[1, 4], [4, 5]]
output = [[1, 5]]
*/

const arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log(interval(arr))
