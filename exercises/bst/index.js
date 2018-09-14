// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }


  insert(val) {
    if (this.data > val) {
      if (this.left === null) {
        this.left = new Node(val);
      } else {
        this.left.insert(val);
      }
    } else if (this.data < val) {
      if (this.right === null) {
        this.right = new Node(val);
      } else {
        this.right.insert(val);
      }
    }
  }

  contains(val) {
    if (this.data === val) {
      return this;
    } 
    if (this.data > val && this.left) {
      return this.left.contains(val)
    }
    if (this.data < val && this.right) {
      return this.right.contains(val);
    } 
    
    return null;
  }
}

module.exports = Node;
