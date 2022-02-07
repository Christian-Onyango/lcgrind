/* Given a triangle array, return the minimum path sum from top to bottom. 
For each step, you may move to either index i or index i + 1 on the next row. 

Input: triangle = [[2], [3, 4], [6,5,7], [4,1 8, 3]]
Output: 11
Explanation: minimum path sum from top to bottom is
2+3+5+1 = 11
*/
const minTable = (triangle) => {
  let table = []
  for (let row of triangle) {
    table.push(new Array(row.length).fill(0))
    table[0] = triangle[0]
  }
  for (let row = 1; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      //if we are at the first col
      if (col === 0) {
        table[row][col] = table[row - 1][col] + triangle[row][col]
      } else if (col === table[row][col].length - 1) {
        table[row][col] =
          table[row - 1][table[row - 1].length - 1] + triangle[row][col]
      } else {
        table[row][col] =
          Math.min(table[row - 1][col], table[row - 1][col - 1]) +
          triangle[row][col]
      }
    }
  }
  return Math.min(...table[table.length - 1])
}
console.log(minTable([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
