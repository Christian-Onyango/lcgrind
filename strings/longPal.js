/* Given a string s, return the longest palindrome
substring in s. Example; 
Input: s = 'babab' Output: 'bab'
Input: s = 'cbbd' Output: 'bb' */

const getDrom = (left, right, str) => {
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) break
    left--
    right++
  }
  return [left + 1, right]
}

const longPal = (str) => {
  let max = [0, 1]
  for (let i = 0; i < str.length; i++) {
    let even = getDrom(i - 1, i, str)
    let odd = getDrom(i - 1, i + 1, str)
    let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax
  }
  return str.slice(max[0], max[1])
}
console.log(longPal("babab"))
