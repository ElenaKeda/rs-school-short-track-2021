/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arrStr = str.split('');
  let count = 1;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      if (i !== 0 && typeof arrStr[i - 1] === 'number') {
        count++;
        arrStr[i] = count;
        arrStr[i - 1] = '';
      } else {
        count++;
        arrStr[i] = count;
      }
    } else {
      count = 1;
    }
  }
  return arrStr.join('');
}

module.exports = encodeLine;
