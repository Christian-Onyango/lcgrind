/* An array is monotonic if it is either monotone increasing or monotone
decreasing. An array A is monotone increasing if for all i <= j, A[i] <= A[j]. 
An array A is monotone decreasing if for all i <= j, A[i] >= A[j]. Return true
if and only if the given array A is monotonic. 
Input: [1,2,2,3] 
Output: true
Input: [1,3,2] 
Output: false
*/
const monotone = (arr) => {
  const same = arr[0] === arr[arr.length - 1]
  const increase = arr[0] < arr[arr.length - 1]
  const decrease = arr[0] > arr[arr.length - 1]

  if (same) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] !== arr[i]) return false
    }
  } else if (increase) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) return false
    }
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] < arr[i]) return false
    }
  }
  return true
}
console.log(monotone([1, 3, 2]))
