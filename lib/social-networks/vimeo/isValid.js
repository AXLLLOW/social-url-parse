const { isValidSocialNetwork } = require('../../utils/urlhelpers');

const REGEXES_SOCIAL = []; // TODO: add regexes

function isValid({ url }) {
  return isValidSocialNetwork(url, REGEXES_SOCIAL);
}

module.exports = {
  isValid
};
