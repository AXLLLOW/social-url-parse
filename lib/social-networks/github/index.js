const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const github = {
  isValid,
  build,
  parse
};

module.exports = {
  github
};
