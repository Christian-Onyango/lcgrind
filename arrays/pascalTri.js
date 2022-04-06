/* Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 */

const pascal = (numRows) => {
  let triangle = new Array(numRows.length).fill(0)
  for (let i = 0; i < numRows.length; i++) {
    let row = new Array(i + 1)
    row[0] = 1
    row[numRows.length - 1] = 1
    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = triangle[i - 1]
      row[j] = rowAbove[j] + rowAbove[j - 1]
    }
    triangle[i] = row
  }
  return triangle
}
