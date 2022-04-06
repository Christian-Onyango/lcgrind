/* Given a 2D integer array matrix, return the transpose of matrix. 
The transpose of a matrix is the matrix flipped over its main diagonal, switching the
matrix's row and column indices. 
Input: matrix = [[1,2,3], [4,5,6], [7,8,9]]
Output: [[1,4,7], [2,5,8], [3,6,9]]

Input: matrix = [[1,2,3], [4,5,6]] 
Output: [[1,4], [2,5], [3,6]]
*/
const transpose = (matrix) => {
  //the rows are the input then we create the columns from them
  //we create an array where the rows rep the cols and vice versa
  const result = Array.from({ length: matrix[0].length }, () =>
    new Array(matrix.length).fill(0)
  )
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      result[c][r] = matrix[r][c]
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
