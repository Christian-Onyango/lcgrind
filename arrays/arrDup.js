//find duplicates in an array
const dup = (arr) => {
  let res = []
  for (let elem of arr) {
    let index = Math.abs(elem) - 1
    if (arr[index] < 0) {
      res.push(index + 1)
    } else {
      arr[index] *= -1
    }
  }
  return res
}
console.log(dup([4, 3, 2, 7, 8, 2, 3, 1]))
