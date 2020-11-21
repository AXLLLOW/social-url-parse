const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const reddit = {
  isValid,
  build,
  parse
};

module.exports = {
  reddit
};
