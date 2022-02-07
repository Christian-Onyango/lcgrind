var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = [intervals[0]]
  for (let num of intervals) {
    let e1 = result[result.length - 1][1]
    let s2 = num[0]
    let e2 = num[1]

    if (e1 >= e2) {
      result[result.length - 1][1] = Math.max(e1, e2)
    } else {
      result.push(num)
    }
  }
  return result
}
