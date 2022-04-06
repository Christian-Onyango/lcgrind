/* Given the head of a singly linked list, return true if it is a palindrome
Input: head = [1,2,2,1] 
output: true
Input: [1,2] 
Output: false
*/
const reverse = (head) => {
  let curr = head
  let prev = null
  let next

  while (curr !== null) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}
const palindrome = (head) => {
  let fast = head
  let slow = head
  let startPointer = head
  let length = 0
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    length++
  }
  let mid = reverse(slow)
  while (length) {
    len--
    if (mid.val !== startPointer.val) return false
    mid = mid.next
    startPointer = startPointer.next
  }
  return true
}
console.log(palindrome([1, 2, 2, 1]))
