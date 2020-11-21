const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const telegram = {
  isValid,
  build,
  parse
};

module.exports = {
  telegram
};
