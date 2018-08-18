// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (min === null && max === null) {
    if (min === null && node.left) {
      return validate(node.left, null, node.data)
    }
    if (max === null && node.right) {
      return validate(node.right, node.data, null)
    }
  }else if (node.data < node.left || node.data > min) {
    return false;
  }else if (node.data > node.left.data && node.data) {
    return validate(node.left, min, node.data)
  } else if (node.data < node.right.data) {
    return validate(node.right, node.data, max)
  } else {
    return true;
  }
}

//recursion
//if left, check if number is higher then parent node and the min



module.exports = validate;
