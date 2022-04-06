/* Given a string s and an integer k, return the length of
the longest substring of s than contains at most k distinct chars. 

Example. Input s = 'eceba', k = 2 output = 3. The substring is 'ece'
with length 3. 
 */
//Sliding Window
const longestSub = (str, k) => {
  let windowStart = 0
  const soFar = new Map()
  let max = 0
  for (let i = 0; i < str.length; i++) {
    let rightChar = str[i]
    !soFar.get(rightChar)
      ? soFar.set(rightChar, 1)
      : soFar.set(rightChar, soFar.get(rightChar) + 1)
    while (soFar.size > k) {
      let leftChar = str[windowStart]
      soFar.get(leftChar) > 1
        ? soFar.set(leftChar, soFar.get(leftChar) - 1)
        : soFar.delete(leftChar)
      windowStart++
    }
    max = Math.max(max, i - windowStart + 1)
  }
  return max
}
console.log(longestSub("eceba", 2))
