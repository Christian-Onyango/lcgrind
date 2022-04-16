//doubly linkedlist
class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}

class LinkedList {
  constructor() {
    this.head = new Node()
    this.tail = new Node()
    this.length = 0
    this.head.next = this.tail
    this.tail.prev = this.head
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return -1
    let curNode = this.head
    for (let i = 0; i < this.length && curNode != null; i++) {
      curNode = curNode.next
    }
    return curNode
  }
  addAtHead(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
  }
  addAtIndex(idx, val) {
    if (idx < 0 || idx > this.length) return -1
    let currNode = this.head
    const node = new Node(val)
    if (idx === 0) {
      if (this.head === null) {
        this.head = node
        this.tail = node
      } else {
        node.next = currNode
        currNode.prev = node
        this.head = node
      }
    } else if (idx === this.length) {
      currNode = this.tail
      currNode.next = node
      node.prev = currNode
      this.tail = node
    } else {
      let prev = this.get(idx - 1)
      currNode = prev.next
      node.next = currNode
      prev.next = node
      currNode.prev = node
      node.prev = prev
    }
    this.length++
  }
  deleteAtIndex(idx) {
    if (idx < 0 || idx >= this.length) return -1
    let curr = this.head
    if (idx === 0) {
      this.head = curr.next
      if (this.length === 0) {
        this.tail = undefined
      } else {
        this.head.prev = undefined
      }
    } else if (idx === this.length - 1) {
      curr = this.tail
      this.tail = curr.prev
      this.tail.next = undefined
    } else {
      curr = this.get(idx)
      const prev = curr.prev
      prev.next = curr.next
      curr.next.prev = prev
    }
    this.length--
    return curr.val
  }
}
