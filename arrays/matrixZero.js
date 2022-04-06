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
const setZero = (r, c, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][c] = 0
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[r][i] = 0
  }
}
const setZeros = (matrix) => {
  const zerosA = []
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) zerosA.push([r, c])
    }
  }
  for (let address of zerosA) {
    let row = address[0]
    let col = address[1]
    setZero(row, col, matrix)
  }
  return zerosA
}
console.log(
  setZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
)
