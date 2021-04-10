/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, val) {
  const array = arr;
  const value = val;
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const middle = low + Math.ceil((high - low) / 2);
    if (value < array[middle]) {
      high = middle - 1;
    } else if (value > array[middle]) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return array.length - 1;
}

module.exports = findIndex;
