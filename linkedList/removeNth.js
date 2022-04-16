//Remove nth node
const removeNth = (head, n) => {
  let dummy = new ListNode(-Infinity, head)
  dummy.next = head
  let resultHead = dummy
  let count = 0
  let tail = head
  while (count < n) {
    count++
    tail = tail.next
  }
  let removeNode = head
  let prev = dummyHead
  while (tail) {
    tail = tail.next
    removeNode = removeNode.next
    prev = prev.next
  }
  prev.next = removeNode.next
  return resultHead.next
}
