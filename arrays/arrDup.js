//find duplicates in an array

const dup = (nums) => {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1
    let val = nums[idx]
    if (val < 0) {
      result.push(Math.abs(nums[idx]))
    } else {
      nums[idx] = -nums[idx]
    }
  }
  return result
}
console.log(dup([4, 3, 2, 7, 8, 2, 3, 1]))
