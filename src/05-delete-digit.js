/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1);
    res.push(arr);
    arr = n.toString().split('');
  }
  return Math.max(...res.map((item) => item.join('')).map((item) => +item));
}

module.exports = deleteDigit;
