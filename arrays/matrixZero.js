/* Given an m * n matrix. If an element is 0, set its
entire row and column to 0. Do it in-place. 
Follow up:
A straight forward solution using 0(mn) space is probably a 
bad idea. 
A simple improvement uses 0(m + n) space, but still not
the best solution. 
Could you devise a constant space solution?
Input: matrix = [[1,1,1], [1,0,1], [1,1,1]]
*/
const helpFunc = (row, col, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0
  }
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0
  }
}

const setZeros = (matrix) => {
  let zeroAdd = []
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        zeroAdd.push([row, col])
      }
    }
  }
  for (let address of zeroAdd) {
    let row = address[0]
    let col = address[1]
    helpFunc(row, col, matrix)
  }
  return matrix
}
console.log(
  setZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
)
