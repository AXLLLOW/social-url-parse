const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const google = {
  isValid,
  build,
  parse
};

module.exports = {
  google
};
