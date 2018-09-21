// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  var result = [];
  var int = 1;
  var direction = 'right';
  var startCol = 0;
  var startRow = 0;
  var endCol = n - 1;
  var endRow = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
  
      for (var i = startCol; i <= endCol; i++){
        if (!result[startRow]){
          result[startRow] = [];
        }
        result[startRow][i] = int;
        int++;
      }
      startRow++;
     

     for (var r = startRow; r <= endRow; r++){
       if (!result[r]){
         result[r] = [];
       }
       result[r][endCol] = int;
       int++;
     }
     endCol--;
  

    for (var c = endCol; c >=startCol; c--){
      result[endRow][c] = int;
      int++
    }
    endRow--;
   

    for (var r = endRow; r >= startRow; r--){
      result[r][startCol] = int;
      int++
    }
    startCol++;

  }
 
  return result;

}



module.exports = matrix;
