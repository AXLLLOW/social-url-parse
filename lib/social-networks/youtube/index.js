const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const youtube = {
  isValid,
  build,
  parse
};

module.exports = {
  youtube
};
