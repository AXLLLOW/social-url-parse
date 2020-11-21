const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const linkedin = {
  isValid,
  build,
  parse
};

module.exports = {
  linkedin
};
