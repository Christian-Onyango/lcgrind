/* Given a linkedlist, return the node where the cycle begins. 
If there is no cycle, return null. There is a cycle in a linkedlist
if there is some node in the list that can be reached again by 
continuously following the next pointer. Internally, pos is used to
denote the index of the node that tail's next pointer is connected
to. Note that pis is not pased as parameter. 
You should not modify the linked list

Example 1:
Input: head = [3,2,0, -4], pos = 1
Output: tail connects to node index 1
Explanation: there is a cycle in the linked list, where tail
connects to the second node. 
*/
const cycle2 = (head) => {
  if (!head) return null
  if (!head.next) return null
  let fast = head
  let slow = head
  let pointer = head
  let index = 0
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) break
  }
  if (fast !== slow) return null
  while (pointer != slow) {
    pointer = pointer.next
    slow = slow.next
    index++
  }
  return slow
}
