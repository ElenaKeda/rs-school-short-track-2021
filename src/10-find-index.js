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
function findIndex(arr, val, startVal, endVal, i) {
  let result;
  let array = arr;
  const value = val;
  let start = startVal;
  let end = endVal;
  let ind = i;
  end = array.length - 1;
  start = start || 0;
  ind = ind || 0;
  const middle = Math.floor((start + (end - start) / 2));
  if (value === array[middle]) {
    // return middle;
    result = middle;
  }
  if (end - 1 === start) {
    result = Math.abs(array[start] - value) > Math.abs(array[end] - value) ? end : start;
  }
  if (value > array[middle]) {
    ind = array.indexOf(array[middle]);
    array = array.slice(middle);
    result = findIndex(array, value, middle, end, ind) + ind;
  }
  if (value < array[middle]) {
    array = array.slice(0, middle);
    result = findIndex(array, value, start, middle, ind) + ind;
  }
  return result;
}

module.exports = findIndex;
