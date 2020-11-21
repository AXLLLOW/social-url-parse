const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const yelp = {
  isValid,
  build,
  parse
};

module.exports = {
  yelp
};
