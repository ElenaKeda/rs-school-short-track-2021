/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sOne = s1;
  let sTwo = s2;
  let count = 0;
  while (sOne.length && sTwo.length) {
    if (sTwo.includes(sOne.charAt(0))) {
      count++;
      sTwo = sTwo.replace(sOne.charAt(0), '');
      sOne = sOne.slice(1);
    } else {
      sOne = sOne.slice(1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
