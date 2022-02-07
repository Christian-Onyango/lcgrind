/* Given an integer array nums, return an array answer such that answer[i] is
equal to the product of all the elements of nums except nums[i]. The product
of any prefix or suffix of nums is guaranteed to fit in a 32 - bit integer. 

Input: nums = [1,2,3,4] 
Output: [24,12,8,6] 
Input: nums = [-1, 1, 0, -3, 3] 
Output: [0,0,9,0,0]
*/
const prodArr = (arr) => {
  const left = new Array(arr.length).fill(0)
  left[0] = 1
  const right = new Array(arr.length).fill(0)
  right[arr.length - 1] = 1
  for (let i = 1; i < arr.length; i++) {
    left[i] = arr[i - 1] * left[i - 1]
  }
  for (let i = right.length - 2; i >= 0; i--) {
    right[i] = arr[i + 1] * right[i + 1]
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = left[i] * right[i]
  }
  return arr
}

console.log(prodArr([1, 2, 3, 4]))
