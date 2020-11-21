const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const vimeo = {
  isValid,
  build,
  parse
};

module.exports = {
  vimeo
};
