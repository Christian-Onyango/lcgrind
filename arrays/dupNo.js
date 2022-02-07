/* Given an array of integers nums containing n + 1 integers
where each integer is in the range [1, n] inclusive. There is only one
repeated number in nums, return this repeated number. 
Input: [1,3,4,2,2] 
Output: 2

Input: nums = [3,1,3,4,2] 
Output: 3

Input: nums = [1,1] 
Output: 1
*/
//use constant space
const repearNo = (nums) => {
  let fast = 0
  let slow = 0
  while (true) {
    fast = nums[nums[fast]]
    slow = nums[slow]

    if (fast === slow) {
      let pointer = 0
      while (pointer !== slow) {
        pointer = nums[pointer]
        slow = nums[slow]
      }
      return pointer
    }
  }
}

console.log(repearNo([3, 1, 3, 4, 2]))
