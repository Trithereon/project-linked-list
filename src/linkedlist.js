// LinkedList class module.

export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      // The list is now: head -> null.
    } else {
      // Start at the head, then traverse sequentially.
      let current = this.head;
      while (current.nextNode !== null) {
        // Update "current" value to next node,
        // and its final value will be "tail",
        // where the next node is null
        current = current.nextNode;
      }
      // Replace null with the new node, which defaults to
      // newNode -> null
      current.nextNode = newNode;
    }
    this.length++;
    return;
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      // Update pointer.
      newNode.nextNode = this.head;
      // Take head node's place in the list.
      this.head = newNode;
    }
    this.length++;
    return;
  }

  // returns the total number of nodes in the list
  getSize() {
    return this.length;
  }

  // returns the first node in the list
  getHead() {
    return this.head;
  }

  // returns the last node in the list
  getTail() {
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    return tail;
  }

  //  returns the node at the given index
  at(index) {
    let node = this.head;
    if (index === 0) {
      return node;
    } else if (index > this.length - 1 || index < 0) {
      return console.error("Invalid index value.");
    } else if (index > 0) {
      for (let i = 1; i <= index; i++) {
        node = node.nextNode;
      }
      return node;
    }
  }

  // removes the last node from the list
  pop() {
    // Get before-last node.
    // Assign null to its nextNode pointer.
    let penultimateNode = this.at(this.length - 2);
    penultimateNode.nextNode = null;
    this.length--;
    return;
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let node = this.head;
    if (node.value === value) return true;
    while (node.nextNode !== null) {
      if (node.nextNode.value === value) return true;
      else node = node.nextNode;
    }
    return false;
  }

  // returns the index of the node containing value, or null if not found.
  find(value) {
    let node = this.head;
    let counter = 0;
    if (node.value === value) return counter;
    while (node.nextNode !== null) {
      counter++;
      if (node.nextNode.value === value) return counter;
      else node = node.nextNode;
    }
  }

  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console.
  toString() {
    let node = this.head;
    let string = `( ${node.value} )`;
    while (node.nextNode !== null) {
      string += ` -> ( ${node.nextNode.value} )`;
      node = node.nextNode;
    }
    string += " -> null";
    return string;
  }

  // inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    // Create node and assign value.
    const newNode = new Node(value);
    // Get node placed before insertion position.
    const prevNode = this.at(index - 1);
    // Get node currently at insertion position.
    const nextNode = this.at(index);
    // Update pointers.
    newNode.nextNode = nextNode;
    prevNode.nextNode = newNode;
  }

  // removes the node at the given index.
  removeAt(index) {
    // Make prevNode point to nextNode, skipping over the target node.
    const prevNode = this.at(index - 1);
    const nextNode = this.at(index + 1);
    prevNode.nextNode = nextNode;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
