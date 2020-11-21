const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const instagram = {
  isValid,
  build,
  parse
};

module.exports = {
  instagram
};
