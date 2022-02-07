/* Given an n-arr tree, return the level order traversal
of its nodes values. Narr-Tree input serialization is represented
in their order traversal, each group of children is separated by the 
null value 
Input: root = [1, null, 3,2,4,null,5,6] 
Output: [[1], [3,2,4], [5,6]]
*/
//this is BFS
const nArr = (root) => {
  if (!root) return []
  let queue = [root]
  let result = []
  while (queue.length) {
    let len = queue.length
    result.push(queue.map((node) => node.val))

    while (len) {
      len--
      for (let child of node.children) {
        queue.push(child)
      }
    }
  }
  return result
}
