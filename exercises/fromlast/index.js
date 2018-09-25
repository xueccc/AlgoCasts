// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  var curNode = list.getFirst();
  var nthNode = list.getFirst();

  for (var i = 0; i < n; i++){
    if (nthNode.next){
      nthNode = nthNode.next;
    }
  }

  while (nthNode.next){
    curNode = curNode.next;
    nthNode = nthNode.next;
  }

  return curNode;
}

module.exports = fromLast;
