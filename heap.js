let minHeap = function () {
  //insert a node in a heap
  let heap = [null]
  this.insert = function (num) {
    heap.push(num)
    //first element in a heap is null so to know if
    //it has values we check if length is more than two
    if (heap.length > 2) {
      let idx = heap.length - 1
      //check if curr index is less than parent index
      while (heap[idx] < heap[Math.floor(idx / 2)]) {
        if (idx >= 1) {
          ;[heap[Math.floor(idx / 2)], heap[idx]] = [
            heap[idx],
            heap[Math.floor(idx / 2)],
          ]
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2)
          } else {
            break
          }
        }
      }
    }
  }
  //remove a node in a heap
  this.remove = function () {
    //we assume smallest element is the element in the first index
    let smallest = heap[1]
    if (heap.length > 2) {
      //swap the first element with the last element
      heap[1] = heap[heap.length - 1]
      //get rid of the last index now
      heap.splice(heap.length - 1)
      //now if the length is 3
      if (heap.length === 3) {
        //just switch them using ES6 destructuring syntax,
        //check which one is bigger and switch
        if (heap[1] > heap[2]) {
          ;[heap[1], heap[2]] = [heap[2], heap[1]]
        }
        return smallest
      }
    }
    let i = 2
    let left = 2 * i
    let right = 2 * i + 1
    while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
      if (heap[left] < heap[right]) {
        ;[heap[i], heap[left]] = [heap[left], heap[i]]
        i = 2 * 1
      } else {
        ;[heap[i], heap[right]] = [heap[right], heap[i]]
        i = 2 * i + 1
      }
      left = 2 * i
      right = 2 * i + 1
      if (heap[left] === undefined || heap[right] === undefined) {
        break
      }
    }
    if (heap.length === 2) {
      heap.splice(1, 1)
    } else {
      return null
    }
  }
}
//Example 2
const getPermutations = (arr) => {
  const output = []
  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA]
    arrToSwap[indexA] = arrToSwap[indexB]
    arrToSwap[indexB] = temp
  }
  const generate = (n, heapArr) => {
    if (n === 1) {
      //.slice will make a new copy of the arr
      output.push(heapArr.slice())
      return
    }
    generate(n - 1, heapArr)
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, i, n - 1)
      } else {
        swapInPlace(heapArr, 0, n - 1)
      }
      generate(n - 1, heapArr)
    }
  }
  generate(arr.length, arr.slice())
  return output
}
console.log(getPermutations([1, 2, 3]))
