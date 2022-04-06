/* Write an efficient algorithm that searches for a value in an m * n 
matrix. This matrix has the following  properties; 
1. Integers in each row are sorted from left to right
2. The first integer of each row is greater than the last 
integer of the previous row

Input: matrix = [[1,3,5,7], [10, 11, 16, 20], [23, 30, 34, 60]] target = 3
Output: true
*/
const searchMatrix = (matrix, target) => {
  let rows = matrix.length
  let cols = matrix[0].length
  let left = 0
  let right = rows * cols - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let midVal = matrix[Math.floor(right / cols)][right % cols]
    if (midVal === target) return true
    if (target < midVal) right = mid - 1
    else left = mid + 1
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
)
