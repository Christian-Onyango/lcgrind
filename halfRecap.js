// const remove = (head, val) => {
//   let dummy = new ListNode(-1)
//   dummy.next = head
//   let prev = dummy
//   let curr = head

//   while (curr) {
//     if (curr.val === val) {
//       prev.next = curr.next
//       curr = curr.next
//     } else {
//       prev = curr
//       curr = curr.next
//     }
//   }
//   return dummy.next
// }

//amount < 0 then card payment
//amount > 0 incoming transfer
//5 bob for having a card
// >= 3 payments of 100 then no fee

let m = "2020-12-01"
console.log(m.splice(0, 4))
