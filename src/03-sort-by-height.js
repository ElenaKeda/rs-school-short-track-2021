/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let clone = [...arr];
  const sortClone = clone.filter((item) => (item !== -1)).sort((a, b) => (a - b));
  clone = clone.map((item) => (item !== -1 ? undefined : -1));
  for (let i = 0; i < sortClone.length; i++) {
    clone[clone.indexOf(undefined)] = sortClone[i];
  }
  return clone;
}

module.exports = sortByHeight;
