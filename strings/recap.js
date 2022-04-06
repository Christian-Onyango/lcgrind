/* Given an array of strings strs, group the anagrams together. 
You can return the answer in any order. An anagram is a word or phrase
formed by rearranging the letters of a different word or phrase, typically
using all the original letters exactly once. 

Input: strs=['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
Output: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]
*/

const groupAnag = (str) => {
  const sortedStr = str.map((word) => word.split("").sort().join(""))
  const hash = {}

  for (let i = 0; i < str.length; i++) {
    if (!hash[sortedStr[i]]) {
      hash[sortedStr[i]] = [str[i]]
    } else {
      hash[sortedStr[i]].push(str[i])
    }
  }
  return Object.values(hash)
}
console.log(groupAnag(["eat", "tea", "tan", "ate", "nat", "bat"]))
