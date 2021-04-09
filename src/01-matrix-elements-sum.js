/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const sum = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        sum.push(matrix[i + 1][j]);
      }
    }
  }

  for (let k = 0; k < matrix[0].length; k++) {
    sum.push(matrix[0][k]);
  }

  return sum.filter((item) => item !== 0).reduce((prev, cur) => prev + cur, 0);
}

module.exports = getMatrixElementsSum;
