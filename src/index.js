module.exports = function solveSudoku(matrix) {
  var  num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var result = [];

  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col <  matrix[row].length; col++) {
          if (matrix[row][col] === 0) {
              let num = count(row, col);
              for (let candidat of num) {
                  matrix[row][col] = candidat;
               solveSudoku(matrix);
                
              }
            
          }
      }
  
    }

  function count(row, col) {

      row =  Math.floor(row/3)*3;
      col =  Math.floor(col/3)*3;
      for (let i = 0; i < 9; i++) {
          result.push([matrix[row][i], matrix[i][col], matrix[row + i % 3][col + Math.floor(i / 3)]])
      }
      return result;
  }
  return matrix;
};