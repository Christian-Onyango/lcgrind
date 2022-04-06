/* An array is monotonic if it is either monotone increasing or monotone
decreasing. An array A is monotone increasing if for all i <= j, A[i] <= A[j]. 
An array A is monotone decreasing if for all i <= j, A[i] >= A[j]. Return true
if and only if the given array A is monotonic. 
Input: [1,2,2,3] 
Output: true
Input: [1,3,2] 
Output: false
*/
const monotonic = (input) => {
  const same = input[0] === input[input.length - 1]
  const increase = input[0] < input[input.length - 1]

  if (same) {
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] !== input[i]) return false
    }
  } else if (increase) {
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] > input[i]) return false
    }
  } else {
    for (let i = 0; i < input.length; i++) {
      if (input[i - 1] < input[i]) return false
    }
  }
  return true
}
console.log(monotonic([1, 2, 2, 3]))
