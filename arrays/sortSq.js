/* Given an integer array nums sorted in non decreasing order, return
an array of the squares of each number sorted in non decreasing order. 
Input: nums = [-4, -1, 0, 3, 10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16, 1, 0, 9, 100] then 
after sorting it becomes [0,1,9,16,100]
Input2: nums = [-7, -3, 2, 3, 11] 
Output: [4,9,9,49,121]
*/
//n long n

// const sortSq = (nums) => {
//   return nums.map((elem) => Math.pow(elem, 2)).sort((a, b) => a - b) // T: n long n
// }

//0(n) and a much better
const sortSq = (nums) => {
  const result = new Array(nums.length).fill(0)
  let left = 0
  let right = nums.length - 1
  let idx = nums.length - 1
  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2)
    let rightVal = Math.pow(nums[right], 2)
    if (leftVal < rightVal) {
      result[idx] = rightVal
      right--
    } else {
      result[idx] = leftVal
      left++
    }
    idx--
  }
  return result
}

console.log(sortSq([-7, -3, 2, 3, 11]))
