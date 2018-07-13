// moment.jsを読み込み
var moment = require('moment');

/**
 * yearがうるう年か判定
 * @param  {number}  year
 * @return {boolean}
 */
function isLeapYear(year) {
  return moment(`${ year }-02`, "YYYY-MM").daysInMonth() == 29;
}

module.exports = isLeapYear;