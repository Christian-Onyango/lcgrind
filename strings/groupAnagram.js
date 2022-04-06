/* Given an array of strings strs, group the anagrams together. 
You can return the answer in any order. An anagram is a word or phrase
formed by rearranging the letters of a different word or phrase, typically
using all the original letters exactly once. 

Input: strs=['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
Output: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]
*/

const groupAnag = (strs) => {
  const sortedArr = strs.map((word) => word.split("").sort().join(""))
  const hash = {}
  for (let i = 0; i < strs.length; i++) {
    if (!hash[sortedArr[i]]) {
      hash[sortedArr[i]] = [strs[i]]
    } else {
      hash[sortedArr[i]].push(strs[i])
    }
  }
  return Object.values(hash)
}
console.log(groupAnag(["eat", "tea", "tan", "ate", "nat", "bat"]))
