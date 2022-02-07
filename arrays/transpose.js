/* Given a 2D integer array matrix, return the transpose of matrix. 
The transpose of a matrix is the matrix flipped over its main diagonal, switching the
matrix's row and column indices. 
Input: matrix = [[1,2,3], [4,5,6], [7,8,9]]
Output: [[1,4,7], [2,5,8], [3,6,9]]

Input: matrix = [[1,2,3], [4,5,6]] 
Output: [[1,4], [2,5], [3,6]]
*/
const transpose = (matrix) => {
  const result = Array.from({ length: matrix[0].length }, () => [])
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      result[col][row] = matrix[row][col]
    }
  }
  return result
}
console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
