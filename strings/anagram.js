/* Given a string s and a non-empty string p, find all
the start indices of P's anagram in s. Strings consist
of lowercase English letters only and the length of both strings s
and p will not be larger than 20,100
Input: s = 'cbaebabacd' p: 'abc'
Output: [0, 6] 
Explanation: The substring with start index = 0 is 'cba' which is an 
anagram of 'abc'. The substring with start index = 6 is 'bac' which is an
anagram of 'abc'*/

const arrValuesEqual = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) return false
  return true
}

const findAnagram = (s, p) => {
  const sArr = new Array(26).fill(0)
  const pArr = new Array(26).fill(0)
  let result = []

  for (let i = 0; i < p.length; i++) {
    let index = p.charCodeAt(i) % 26
    pArr[index]++
  }
  for (let i = 0; i < s.length; i++) {
    let index = s.charCodeAt(i) % 26
    sArr[index]++

    if (i > p.length - 1) {
      //decrement the head index
      let headIdx = s.charCodeAt(i - p.length) % 26
      sArr[headIdx]--
    }
    if (i >= p.length - 1) {
      if (arrValuesEqual(sArr, pArr)) result.push(i - (p.length - 1))
    }
  }
  return result
}
console.log(findAnagram("cbaebabacd", "abc"))
