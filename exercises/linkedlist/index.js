// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data,
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);
  }

  size(){
    let counter = 0;
    let curNode = this.head;
    while (curNode){
       counter++;
       curNode = curNode.next;
    }
    return counter;
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let last = this.head;
    while (last) {
      if (!last.next){
        return last;
      }
      last = last.next;
    }
  }

  clear(){
    this.head = null;
  }

  removeFirst(){
    this.head = this.head.next;
  }

  removeLast(){
    if (!this.head){
      return;
    }
    if (!this.head.next){
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next){
      previous = node;
      node = node.next;
    }

    previous.next = null;
    
  }

  insertLast(data){
    let newNode = new Node(data)
    if (!this.head){
      this.head = newNode;
    } else {
      this.getLast().next = newNode;
    }
  }

  getAt(int){
    var count = 0;
    var node = this.head;

    while (count < int){
      if (!node){
        return null;
      }
      node = node.next;
      count++;
    }
    return node;
  }

  removeAt(int){
    if (!this.head){
      return;
    }

    if (int === 0){
      this.head = this.head.next;
      return;
    }
    var previous = this.getAt(int -1)
    if (previous.next){
      previous.next = previous.next.next;
      return;
    }
    return;
  }

  insertAt(data, int){
    if (!this.head){
      this.head = new Node(data);
      return;
    }

    if (int === 0){
      this.head = new Node(data, this.head);
      return;
    }

    var previous = this.getAt(int - 1) || this.getLast();
    previous.next = new Node(data, previous.next)
    return;

  }

  forEach(cb){
    var node = this.head;

    var idx = 0;
    while (node){
      cb(node, idx);
      node = node.next;
      idx++;
    }
    return;
  }
 
}

module.exports = { Node, LinkedList };
