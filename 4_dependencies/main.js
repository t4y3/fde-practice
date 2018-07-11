var isLeapYear = require('is-leap-year');

// 引数のチェック
if (!process.argv[2]) {
  console.log('年を引数で渡してください！');
  return;
}

// うるう年か判別
if (isLeapYear(process.argv[2])) {
  console.log(`${ process.argv[2] }年はうるう年です！`);
} else {
  console.log(`${ process.argv[2] }年はうるう年ではないです！`);
}
