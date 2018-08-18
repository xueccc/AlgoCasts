// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let width = [0];
  let counter = 0;
  let arr = [root, 's'];

  while (arr.length > 1) {
    let node = arr.shift();
    if ( node === 's' ) {
      arr.push('s');
      width.push(0);
      counter++;
    } else if (node.data !== null) { 
      width[counter] = width[counter] + 1;
      arr.push(...node.children)
    }
  }

  return width;

}

module.exports = levelWidth;

const Node = require('./node');

const root = new Node(0);
  root.add(1);
  root.add(2);
  root.add(3);
  root.children[0].add(4);
  root.children[2].add(5);

levelWidth(root);