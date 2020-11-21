const { isValidSocialNetwork } = require('../../utils/urlhelpers');

const REGEXES_SOCIAL = [/^t[.]me$/];

function isValid({ url }) {
  return isValidSocialNetwork(url, REGEXES_SOCIAL);
}

module.exports = {
  isValid
};
