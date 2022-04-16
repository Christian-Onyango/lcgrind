/* Merge two sorted linked list and return it as a sorted list. The list
should be made by splicing together the nodes of the first two lists. 
Input: l1 = [1,2,4], l2 = [1,3,4] 
Output: [1,1,2,3,4,4]
*/

const mergeTwo = (l1, l2) => {
  let dummy = new ListNode(-1)
  prev = dummy
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      prev = l1
      l1 = l1.next
    } else {
      prev.next = l2
      prev = l2
      l2 = l2.next
    }
  }
  if (!l1) prev.next = l2
  if (!l2) prev.next = l1
  return dummy.next
}

console.log(mergeTwo([1, 2, 4], [1, 3, 4]))
