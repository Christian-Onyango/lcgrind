const missNo = (nums) => {
  const gSum = nums.length * ((nums.length + 1) / 2)
  const nSum = nums.reduce((acc, curr) => acc + curr, 0)
  return gSum - nSum
}
console.log(missNo([3, 0, 1]))
