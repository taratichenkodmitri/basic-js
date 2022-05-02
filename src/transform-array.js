const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!(Array.isArray(arr))) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];
  let prevAction = ''

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '--double-next') {
      if((i + 1) != arr.length) {
        result.push(arr[i + 1]);
        prevAction = '--double-next';
      }  
      continue;
    }
    if(arr[i] === '--double-prev') {
      if((i - 1) >= 0 && prevAction != '--discard-next') {
        result.push(arr[i - 1]);
        prevAction = '--double-prev';
      }  
      continue;
    }
    if(arr[i] === '--discard-next') {
      if((i + 1) != arr.length) {
        i++;
        prevAction = '--discard-next';
      }  
      continue;
    }
    if(arr[i] === '--discard-prev') {
      if((i - 1) >= 0  && prevAction != '--discard-next') {
        result.pop();
        prevAction = '--discard-next';
      }  
      continue;
    }
    result.push(arr[i]);
  }

  return result;
}

module.exports = {
  transform
};
