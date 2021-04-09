/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const arr = n.split('-').map((item) => item.split('')).flat();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      if (arr[i] === digits[j]) {
        arr[i] = '';
      }
    }
  }
  return arr.join('').length === 0;
}

module.exports = isMAC48Address;
