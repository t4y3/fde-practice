// moment.jsを読み込み
var moment = require('moment');
// 使ってない変数
var test = '';

/**
 * yearがうるう年か判定
 * @param  {number}  year
 * @return {boolean}
 */
function isLeapYear(year) {
  return moment(`${ year }-02`, "YYYY-MM").daysInMonth() == 29;
}

module.exports = isLeapYear;