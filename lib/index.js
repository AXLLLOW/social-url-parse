const { buildSocialLink } = require('./buildSocialNetwork');
const { parseSocialNetwork } = require('./parseSocialNetwork');
const { isValidSocialNetwork } = require('./isValidSocialNetwork');

module.exports = {
  isValid: isValidSocialNetwork,
  build: buildSocialLink,
  parse: parseSocialNetwork
};
