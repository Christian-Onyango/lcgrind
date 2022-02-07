/* Write an algorithm to determine if a number n is happy. 
A happy number is a number defined by the following process:
1. Starting with any positive integer, replace the number by the
sum of the squares of its digits. 
2. Repeat the process until the number equals 1(where it will stay),
or it loops endlessly in a cycle which does not include 1. 
3. Those numbers for which this process ends in 1 are happy, 

Return true if n is a happy number, and false if not. 
Input: n = 19
Output: true
*/

//get sum of all digits first
const getNumSum = (num) => {
  let total = 0
  while (num !== 0) {
    let lastDigit = num % 10
    num = Math.floor(num / 10)
    total += Math.pow(lastDigit, 2)
  }
  return total
}

const isHappy = (n) => {
  let fast = n
  let slow = n
  while (true) {
    fast = getNumSum(getNumSum(fast))
    slow = getNumSum(slow)
    if (fast === slow) {
      return fast === 1
    }
  }
}
console.log(isHappy(2))
