/* 
Evaluate the value of an arithmetic expression in Reverse Polish Notation.
Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
Note that division between two integers should truncate toward zero.
It is guaranteed that the given RPN expression is always valid. 
That means the expression would always evaluate to a result, 
and there will not be any division by zero operation.

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
*/

const evalRPN = (tokens) => {
  const stack = []
  const operators = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2,
    "/": (num1, num2) => Math.trunc(num1 / num2),
  }

  for (let token of tokens) {
    if (operators[token]) {
      let num2 = stack.pop()
      let num1 = stack.pop()

      stack.push(operators[token](num1, num2))
    } else {
      stack.push(parseInt(token))
    }
  }
  return stack.pop()
}
