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
  const string = str;
  const obj = {};
  const chars = string.split('');
  for (let i = 0; i < chars.length; i++) {
    const count = obj[chars[i]] ? obj[chars[i]] : 0;
    obj[chars[i]] = count + 1;
  }
  const s = Object.entries(obj).map((item) => (item.reverse())).flat().join('');
  return s.replace(/1/gi, '');
}

module.exports = encodeLine;
