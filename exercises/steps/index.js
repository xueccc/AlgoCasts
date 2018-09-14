// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, s = '') {

  //iterative
  // for (var row = 0; row < n; row++) {
  //   var step = '';
  //   for (var col = 0; col < n; col++) {
  //     if (col <= row) {
  //       step += '#';
  //     } else {
  //       step += ' '
  //     }
  //   }
  //   console.log(step)
  // }

  //recursive
  if (row === n){
    return;
  }

  if (s.length === n){
    console.log(s)
    return steps(n, row+1)
  }
  
  let add = s.length <= row ? "#" : " ";

  steps(n, row, s + add);

}

module.exports = steps;
