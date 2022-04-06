/* Given a head of a singly linked list, reverse the list, and
return the reversed list.
Input: head = [1,2,3,4,5] 
Output: [5,4,3,2,1]  */

const revLi = (head) => {
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
console.log(revLi([1, 2, 3, 4, 5]))
