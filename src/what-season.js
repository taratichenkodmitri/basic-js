const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  return date === undefined ? 'Unable to determine the time of year!' : getSeasonHelper(date);
}

function getSeasonHelper(date) {
  if(!(date instanceof Date) || date.hasOwnProperty('getMonth') || Object.keys(date).length != 0) {
    throw new Error("Invalid date!");
  }
  
  let month = date.getMonth();
  if(month == 11 || month == 0 || month == 1) {
    return 'winter';
  } else if(month == 2 || month == 3 || month == 4) {
    return 'spring';
  } else if(month == 5 || month == 6 || month == 7) {
    return 'summer';
  } else {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
