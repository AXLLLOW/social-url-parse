const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const soundcloud = {
  isValid,
  build,
  parse
};

module.exports = {
  soundcloud
};
