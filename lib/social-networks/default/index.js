const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const defaultSN = {
  isValid,
  build,
  parse
};

module.exports = {
  defaultSN
};
