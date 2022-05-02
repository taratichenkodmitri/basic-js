const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((prev,curr) => {
    return prev += curr.reduce((prev,curr) => {
     if(curr === '^^') {
       prev += 1;
     } 
     return prev;
    }, 0)
  }, 0)
}

module.exports = {
  countCats
};
