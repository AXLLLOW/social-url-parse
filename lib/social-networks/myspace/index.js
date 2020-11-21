const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const myspace = {
  isValid,
  build,
  parse
};

module.exports = {
  myspace
};
