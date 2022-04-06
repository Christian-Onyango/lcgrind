/* Given a string s containing just the characters '(', ')', '{','}', '['  and ']',
determine if the input string is valid. An input string is valid if:
1. Open brackets must be closed by the same type of brackets
2. Open brackets must be closed in the correct order

Input: s = '()' returns true
Input: s = '()[]{}' return true
Input: s = '(]' return false
 */
const validPar = (str) => {
  let i = 0
  let parens = "() {} []"
  const stack = []

  while (i < str.length) {
    stack.push(str[i])
    i++

    let open = stack[stack.length - 2]
    let closed = stack[stack.length - 1]

    let allParens = open + closed
    if (parens.includes(allParens)) {
      stack.pop()
      stack.pop()
    }
  }
  return stack.length === 0
}
console.log(validPar("(]"))
