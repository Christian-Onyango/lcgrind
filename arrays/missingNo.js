/* Given an array nums containing n distinct numbers in the range [0, n] 
return the only number in the range that is missing from the array. 
Follow up: Could you implement a solution using only 0(1)  extra space
complexity and 0(n) runtime complexity?

Input: nums [3,0,1] 
Output: 2

Input: nums [0, 1] 
Output: 2
*/
const missingNo = (nums) => {
  const gSum = nums.length * ((nums.length + 1) / 2)
  const nSum = nums.reduce((acc, el) => acc + el, 0)
  return gSum - nSum
}
console.log(missingNo([3, 0, 1]))
