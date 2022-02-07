/* Merge two sorted linked list and return it as a sorted list. The list
should be made by splicing together the nodes of the first two lists. 
Input: l1 = [1,2,4], l2 = [1,3,4] 
Output: [1,1,2,3,4,4]
*/
const mergeTwo = (l1, l2) => {
  let res = []
  while (l1.length && l2.length) {
    let next = l1[0] < l2[0] ? l1.shift() : l2.shift()
    res.push(next)
  }
  if (l1.length) {
    res = [...res, ...l1]
  }
  if (l2.length) {
    res = [...res, ...l2]
  }
  return res
}
console.log(mergeTwo([1, 2, 4], [1, 3, 4]))
