/* Given the head of a linked list and an integer val,
remove all the nodes of the linked list that has node.val == val,
and return the new head. 
Input: head = [1,2,6,3,4,5,6], val  = 6
Output: [1,2,3,4,5]
*/
const removeElement = (head, val) => {
  let dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  let curr = head
  while (curr) {
    if (curr.val === val) {
      curr = curr.next
      prev.next = curr.next
    } else {
      prev = curr
      curr = curr.next
    }
  }
  return dummy.next
}
