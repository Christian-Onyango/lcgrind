/* Given the head of a sorted linked list, delete all the duplicates such that
each element appears only once. Return the linked list sorted as well
Input: head = [1,1,2] 
Output: [1,2]
*/
const deleteDups = (head) => {
  let dummy = new ListNode(-Infinity, head)
  let cur = head
  let prev = dummy
  while (cur) {
    if (cur.val === prev.val) {
      while (cur && cur.val === prev.val) {
        cur = cur.next
      }
      prev.next = cur
    } else {
      prev = cur
      cur = cur.next
    }
  }
  return dummy.next
}
//Remove all duplicates II leaving only distinct numbers

const deleteDups2 = (head) => {
  if (!head) return null
  let dummy = new ListNode(-Infinity, head)
  let prev = dummy
  let curr = head
  let next = curr.next

  while (curr) {
    if (curr && next && curr.val === next.val) {
      while (next && curr.val === next.val) {
        next = next.next
      }
      prev.next = next
      curr = next
      next = next ? next.next : null
    } else {
      prev = curr
      curr = next
      next = next ? next.next : null
    }
  }
  return dummy.next
}
