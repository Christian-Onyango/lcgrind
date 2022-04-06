/* When given two strings A and B. A shift on A consists of taking string A 
and moving the leftmost character to the rightmost position. For example, if A
= 'abcde', then it will be 'bcdea' after one shift on A. Return true if and 
only if A can become B after some number of shifts. 
 */
const rotateStr = (strA, strB) => {
  if (strA.length !== strB.length) return false
  if (strA.length === 0 && strB.length === 0) return true
  concA = strA + strA
  return concA.includes(strB)
}
console.log(rotateStr("abcde", "cdeab"))
