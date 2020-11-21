const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const etsy = {
  isValid,
  build,
  parse
};

module.exports = {
  etsy
};
