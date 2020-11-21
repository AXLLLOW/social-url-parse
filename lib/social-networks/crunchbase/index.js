const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const crunchbase = {
  isValid,
  build,
  parse
};

module.exports = {
  crunchbase
};
