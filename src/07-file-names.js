/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const name = names;
  const result = [];
  while (name.length) {
    const element = name[0];
    for (let i = 1, j = 1; i < name.length; i++) {
      if (name[i] === element) {
        name[i] = `${name[i]}(${j})`;
        j++;
      }
    }
    result.push(name.shift());
  }
  return result;
}

module.exports = renameFiles;
