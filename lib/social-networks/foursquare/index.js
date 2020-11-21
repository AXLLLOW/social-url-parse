const { isValid } = require('./isValid');
const { build } = require('./build');
const { parse } = require('./parse');

const foursquare = {
  isValid,
  build,
  parse
};

module.exports = {
  foursquare
};
