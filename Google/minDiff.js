let minDifference = (nums) => {
  let min = Infinity
  nums.sort((a, b) => a - b)
  j = nums.length - 4
  i = 0
  while (j >= 0 && j < nums.length) {
    min = Math.min(min, nums[j++] - nums[i++])
  }
  return min < Infinity ? min : 0
}

console.log(minDifference([5, 3, 2, 4]))
