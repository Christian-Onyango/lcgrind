const search = (matrix, target) => {
  let rows = matrix.length
  let col = matrix[0].length

  let left = 0
  let right = rows * col - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let midVal = matrix[Math.floor(right / col)][right % col]
    if (midVal === target) return true
    if (target < midVal) right = mid - 1
    else left = mid + 1
  }
  return false
}
console.log(
  search(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
)
