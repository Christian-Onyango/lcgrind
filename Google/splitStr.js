/* 
You are given a string s, a split is called good if you can split s into 2 
non-empty strings p and q where its concatenation is equal to s 
and the number of distinct letters in p and q are the same.
Return the number of good splits you can make in s.
Input: s = "aacaba"
Output: 2
*/

var numSplits = function (s) {
  let set = new Set()
  let l2r = new Array(s.length),
    r2l = new Array(s.length)

  for (let i = 0; i < s.length; i++) {
    set.add(s[i])
    l2r[i] = set.size
  }

  set = new Set()
  for (let i = s.length - 1; i >= 0; i--) {
    set.add(s[i])
    r2l[i] = set.size
  }

  let res = 0
  for (let i = 1; i < s.length; i++) {
    if (l2r[i - 1] == r2l[i]) res++
  }
  return res
}
console.log(numSplits("aacaba"))
