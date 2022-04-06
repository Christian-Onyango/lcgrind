/*Given a string s, find the length of the longest substring
without repeating characters. 
Input: s = 'abcabcbb'
Output: 3
Explanation: The answer is 'abc', with the length of 3 */
const longSub = (str) => {
  let max = 0
  let windowStart = 0
  const soFar = {}
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]
    soFar[rightChar] = soFar[rightChar] + 1 || 1
    while (soFar[rightChar] > 1) {
      let leftChar = str[windowStart]
      soFar[leftChar] > 1 ? soFar[leftChar]-- : delete soFar[leftChar]
      windowStart++
    }
    max = Math.max(max, i - windowStart + 1)
  }
  return max
}
console.log(longSub([2, 6, 8, 5]))
