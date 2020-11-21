const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const twitter = {
  isValid,
  build,
  parse
};

module.exports = {
  twitter
};
