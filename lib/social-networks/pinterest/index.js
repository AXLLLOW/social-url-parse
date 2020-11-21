const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const pinterest = {
  isValid,
  build,
  parse
};

module.exports = {
  pinterest
};
