function getName(node) {
  return node.name
}

function headNode(head, collection) {
  return collection[head]
}

function next(node, collection) {
  let nextNode = collection[node.next]
  
  return nextNode
}

function nodeAt(index, linkedList, collection) {
  let head = collection[linkedList]
  let node = head
  
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  
  return node
}

function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList
  } else {
    return nodeAt((index-1), linkedList, collection).next
  }
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  
  let length = Object.keys(collection).length
  let currentNode = collection[linkedList]
  
  for (let i = 0; i < length; i++) {
    if (node === currentNode) {
      return index
    }
    currentNode = next(currentNode, collection)
    index ++
  }
}

function insertNodeAt(index, key, linkedList, collection) {
  collection[key].next = nodeAt((index - 1), linkedList, collection).next
  nodeAt((index - 1), linkedList, collection).next = key
}

function deleteNodeAt(index, linkedList, collection) {
  nodeAt((index - 1), linkedList, collection).next = nodeAt((index), linkedList, collection).next
}