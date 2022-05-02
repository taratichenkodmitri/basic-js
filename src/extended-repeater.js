const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let result = [];
  let additionResult = [];

  let repeatTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';

  if(options.addition !== undefined) {

    while(additionRepeatTimes) {
      additionResult.push(options.addition + '');
      --additionRepeatTimes;
    }
    str += additionResult.join(additionSeparator);
  }

  while(repeatTimes) {
    result.push(str);
    --repeatTimes;
  }
  return result.join(separator);
}

module.exports = {
  repeater
};
