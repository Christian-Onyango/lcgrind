/* Given an integer array nums, move all 0s to the end of it while
maintaining the relative order of the non-zero elements. You must
do this in-place without making a copy of the array. 
Input: nums= [0,1,0,3,12] 
Output: [1,3,12,0,0] 
Input: [0] 
Output: [0] 
*/
const moveZero = (arr) => {
  let lastNonZero = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[lastNonZero] = arr[i]
      lastNonZero++
    }
  }
  for (let i = lastNonZero; i < arr.length; i++) {
    arr[i] = 0
  }

  return arr
}
console.log(moveZero([0, 1, 0, 3, 12]))
