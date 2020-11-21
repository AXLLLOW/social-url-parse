const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const facebook = {
  isValid,
  build,
  parse
};

module.exports = {
  facebook
};
